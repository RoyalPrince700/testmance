import { useEffect, useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { contactAPI } from '../utils/api';
import Footer from './HomeSections/Footer';

const WHATSAPP_NUMBER = '2348160881705';
const WHATSAPP_DISPLAY = '0816 088 1705';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const CONTACT_EMAIL = 'finetex700@gmail.com';

const fieldClass = 'h-11 w-full rounded-2xl border border-line bg-canvas px-4 text-sm text-ink focus:border-accent focus:outline-none';

const Contact = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) return;
    setForm((current) => ({
      ...current,
      name: current.name || user.username || '',
      email: current.email || user.email || '',
    }));
  }, [user]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    try {
      await contactAPI.send(form);
      setStatus('sent');
      setForm((current) => ({
        ...current,
        subject: '',
        message: '',
        company: '',
      }));
    } catch (err) {
      setStatus('idle');
      setError(err.message || 'We could not send that message.');
    }
  };

  return (
    <div className="bg-canvas text-ink">
      <section className="pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="rise-in text-sm font-medium text-accent">Contact</p>
          <h1
            className="rise-in mt-4 max-w-3xl text-[2.6rem] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl"
            style={{ animationDelay: '70ms' }}
          >
            Talk to us.
          </h1>
          <p className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
            Questions about a course, an account, or gems. Send a message, or chat on WhatsApp.
          </p>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <form onSubmit={handleSubmit} className="relative rounded-3xl border border-line bg-surface p-5 sm:p-8" noValidate>
            <h2 className="text-lg font-medium tracking-tight text-ink">Send a message</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">
              It goes to {CONTACT_EMAIL}. We reply to the address you enter.
            </p>

            <div className="pointer-events-none absolute h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={updateField}
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={updateField}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={updateField}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-ink">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={updateField}
                className={fieldClass}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={updateField}
                className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
              />
            </div>

            {status === 'sent' && (
              <p className="mt-4 rounded-2xl bg-accent-soft px-4 py-3 text-sm text-accent" role="status">
                Message sent. We will reply to {form.email || 'your email'}.
              </p>
            )}
            {error && (
              <p className="mt-4 rounded-2xl bg-accent-soft px-4 py-3 text-sm text-accent" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="btn-primary mt-6 h-12 px-6 text-base disabled:opacity-60" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>

          <aside className="rounded-3xl border border-line bg-surface p-5 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">Chat on WhatsApp</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">
              Message {WHATSAPP_DISPLAY} and we will pick it up there.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 h-12 px-6 text-base"
            >
              Chat with us
            </a>

            <div className="mt-8 border-t border-line pt-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Mail className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">Email</h2>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 inline-block text-[15px] text-accent">
                {CONTACT_EMAIL}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
