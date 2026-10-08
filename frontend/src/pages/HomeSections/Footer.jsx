import { Link } from 'react-router-dom';
import testmancerLogo from '../../assets/testmancer-logo.png';

const COMMUNITY_URL = 'https://chat.whatsapp.com/KJp5NV1ox3T91Vk14UOyai?mode=hqrt3';

const Footer = () => {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <img src={testmancerLogo} alt="" className="h-7 w-auto" />
            <span className="text-base font-medium tracking-tight text-ink">TestMancer</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
            Exam preparation with courses, adaptive quizzes, and a score you can follow.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-medium text-ink">Platform</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/courses" className="text-slate hover:text-ink">Courses</Link></li>
            <li><Link to="/login" className="text-slate hover:text-ink">Sign in</Link></li>
            <li><Link to="/leaderboard" className="text-slate hover:text-ink">Leaderboard</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-ink">Company</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/about" className="text-slate hover:text-ink">About</Link></li>
            <li><Link to="/contact" className="text-slate hover:text-ink">Contact</Link></li>
            <li><Link to="/terms" className="text-slate hover:text-ink">Terms</Link></li>
            <li><Link to="/privacy" className="text-slate hover:text-ink">Privacy</Link></li>
            <li>
              <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-ink">
                WhatsApp community
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-slate sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} TestMancer</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-ink">Terms</Link>
            <Link to="/privacy" className="hover:text-ink">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
