const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// FormSubmit delivers to this inbox. It sends one activation email before the first message is accepted.
const CONTACT_TO = 'finetex700@gmail.com';
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

const clientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
};

router.post(
  '/',
  [
    body('name')
      .trim()
      .isLength({ min: 2, max: 80 })
      .withMessage('Enter your name.'),
    body('email')
      .trim()
      .isEmail()
      .withMessage('Enter a valid email so we can reply.')
      .normalizeEmail(),
    body('subject')
      .trim()
      .isLength({ min: 3, max: 120 })
      .withMessage('Add a short subject.'),
    body('message')
      .trim()
      .isLength({ min: 10, max: 2000 })
      .withMessage('Write a message of at least 10 characters.'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg,
      });
    }

    const { name, email, subject, message, company } = req.body;

    if (company) {
      return res.json({ success: true, message: 'Message sent.' });
    }

    if (isRateLimited(clientIp(req))) {
      return res.status(429).json({
        success: false,
        message: 'Please wait a while before sending another message.',
      });
    }

    try {
      const origin = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: origin,
          Referer: `${origin}/contact`,
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `TestMancer: ${subject}`,
          _replyto: email,
          _template: 'box',
          _captcha: 'false',
        }),
        signal: AbortSignal.timeout(15000),
      });

      const data = await response.json().catch(() => ({}));
      const accepted = response.ok && String(data.success) !== 'false';

      if (!accepted) {
        console.error('Contact form delivery failed:', data.message || response.status);
        return res.status(502).json({
          success: false,
          message: 'We could not send that message. Try WhatsApp, or send it again in a moment.',
        });
      }

      return res.json({ success: true, message: 'Message sent.' });
    } catch (error) {
      console.error('Contact form error:', error.message);
      return res.status(502).json({
        success: false,
        message: 'We could not send that message. Try WhatsApp, or send it again in a moment.',
      });
    }
  }
);

module.exports = router;
