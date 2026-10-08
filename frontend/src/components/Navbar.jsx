import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { isLearningPath } from '../utils/slugs';
import { useTheme } from '../contexts/ThemeContext';
import {
  User,
  Trophy,
  BookOpen,
  LogOut,
  Gem,
  Target,
  Menu,
  X,
  Shield,
  LayoutDashboard,
  Info,
  Mail,
  Home,
  Award,
  FileText,
  PenTool,
  ScrollText,
  Sun,
  Moon,
  ChevronDown,
} from 'lucide-react';
import { getAvatarSrc } from '../utils/avatarUtils';
import testmancerLogo from '../assets/testmancer-logo.png';

const COMMUNITY_URL = 'https://chat.whatsapp.com/KJp5NV1ox3T91Vk14UOyai?mode=hqrt3';

const WhatsAppIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const isPracticePath = (pathname) =>
  ['/quiz-hub', '/ca', '/exam'].some((path) => pathname === path || pathname.startsWith(`${path}/`));

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const practiceRef = useRef(null);
  const userRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsSidebarOpen(false);
    setUserOpen(false);
  };

  useEffect(() => {
    setIsSidebarOpen(false);
    setPracticeOpen(false);
    setUserOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (practiceRef.current && !practiceRef.current.contains(event.target)) {
        setPracticeOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setUserOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPracticeOpen(false);
        setUserOpen(false);
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const linkClass = (active) =>
    `inline-flex h-16 items-center border-b-2 text-sm transition-colors ${
      active
        ? 'border-accent font-medium text-ink'
        : 'border-transparent text-graphite hover:text-ink'
    }`;

  const ThemeButton = ({ className = '' }) => (
    <button
      type="button"
      onClick={toggleDarkMode}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-graphite transition-colors hover:bg-canvas hover:text-ink ${className}`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );

  const Logo = ({ onClick }) => (
    <Link to="/" onClick={onClick} className="flex shrink-0 items-center gap-2.5">
      <img src={testmancerLogo} alt="" className="h-7 w-auto" />
      <span className="text-base font-medium tracking-tight text-ink">TestMancer</span>
    </Link>
  );

  const practiceLinks = [
    { to: '/quiz-hub', label: 'Quiz Hub', icon: Target },
    { to: '/ca', label: 'CA', icon: FileText },
    { to: '/exam', label: 'Exam', icon: PenTool },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <div className="mx-auto hidden h-16 max-w-6xl items-center gap-8 px-5 md:px-8 lg:flex">
        <Logo />

        <nav className="flex flex-1 items-center gap-6" aria-label="Primary">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className={linkClass(pathname === '/dashboard')} aria-current={pathname === '/dashboard' ? 'page' : undefined}>
                Dashboard
              </Link>
              <Link to="/courses" className={linkClass(isLearningPath(pathname))} aria-current={isLearningPath(pathname) ? 'page' : undefined}>
                Courses
              </Link>
              <div className="relative" ref={practiceRef}>
                <button
                  type="button"
                  className={`${linkClass(isPracticePath(pathname))} gap-1`}
                  aria-expanded={practiceOpen}
                  aria-haspopup="true"
                  onClick={() => setPracticeOpen((open) => !open)}
                >
                  Practice
                  <ChevronDown className={`h-4 w-4 transition-transform ${practiceOpen ? 'rotate-180' : ''}`} />
                </button>
                {practiceOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-2xl border border-line bg-surface p-1.5 shadow-lg">
                    {practiceLinks.map(({ to, label, icon: Icon }) => (
                      <Link
                        key={to}
                        to={to}
                        className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink"
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/results" className={linkClass(pathname.startsWith('/results'))} aria-current={pathname.startsWith('/results') ? 'page' : undefined}>
                Results
              </Link>
              <Link to="/leaderboard" className={linkClass(pathname.startsWith('/leaderboard'))} aria-current={pathname.startsWith('/leaderboard') ? 'page' : undefined}>
                Leaderboard
              </Link>
            </>
          ) : (
            <>
              <Link to="/courses" className={linkClass(isLearningPath(pathname))} aria-current={isLearningPath(pathname) ? 'page' : undefined}>
                Courses
              </Link>
              <Link to="/about" className={linkClass(pathname.startsWith('/about'))}>
                About
              </Link>
              <Link to="/contact" className={linkClass(pathname.startsWith('/contact'))}>
                Contact
              </Link>
              <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className={linkClass(false)}>
                Community
              </a>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeButton />
          {isAuthenticated && user ? (
            <>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gem-soft px-3 py-1 text-sm font-medium text-gem">
                <Gem className="h-3.5 w-3.5" />
                {user.gems || 0}
              </div>
              <div className="relative" ref={userRef}>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 text-sm text-ink hover:bg-canvas"
                  aria-expanded={userOpen}
                  aria-haspopup="true"
                  onClick={() => setUserOpen((open) => !open)}
                >
                  <img
                    src={getAvatarSrc(user.avatar)}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="max-w-28 truncate">{user.username}</span>
                </button>
                {userOpen && (
                  <div className="absolute right-0 top-full z-50 mt-1 w-52 rounded-2xl border border-line bg-surface p-1.5 shadow-lg">
                    <Link to="/profile" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <Link to="/courses" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink">
                      <BookOpen className="h-4 w-4" />
                      My courses
                    </Link>
                    <Link to="/about" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink">
                      <Info className="h-4 w-4" />
                      About
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink">
                      <Mail className="h-4 w-4" />
                      Contact
                    </Link>
                    <Link to="/terms" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink">
                      <ScrollText className="h-4 w-4" />
                      Terms
                    </Link>
                    <Link to="/privacy" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink">
                      <ScrollText className="h-4 w-4" />
                      Privacy
                    </Link>
                    <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink">
                      <WhatsAppIcon className="h-4 w-4" />
                      Community
                    </a>
                    {user?.isAdmin && (
                      <Link to="/admin/dashboard" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink">
                        <Shield className="h-4 w-4" />
                        Admin
                      </Link>
                    )}
                    <button type="button" onClick={handleLogout} className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-graphite hover:bg-canvas hover:text-ink">
                      <LogOut className="h-4 w-4" />
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 text-sm font-medium text-graphite hover:text-ink">
                Sign in
              </Link>
              <Link to="/register" className="btn-primary">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="flex h-14 items-center justify-between px-4 lg:hidden">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Logo />
        <div className="flex items-center gap-1">
          <ThemeButton />
          {isAuthenticated && user ? (
            <Link to="/profile" aria-label="Profile">
              <img src={getAvatarSrc(user.avatar)} alt="" className="h-8 w-8 rounded-full object-cover" />
            </Link>
          ) : (
            <Link to="/login" className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink" aria-label="Sign in">
              <User className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>

      {isSidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          aria-label="Close menu"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        inert={isSidebarOpen ? undefined : true}
        aria-hidden={!isSidebarOpen}
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(100%,20rem)] flex-col bg-surface transition-transform duration-200 lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-line px-4">
          <Logo onClick={() => setIsSidebarOpen(false)} />
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-graphite"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          {isAuthenticated && user && (
            <div className="mb-4 flex items-center gap-3 rounded-2xl bg-canvas px-3 py-3">
              <img src={getAvatarSrc(user.avatar)} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-ink">{user.username}</p>
                <p className="mt-0.5 inline-flex items-center gap-1 text-sm text-gem">
                  <Gem className="h-3.5 w-3.5" />
                  {user.gems || 0} gems
                </p>
              </div>
            </div>
          )}

          <nav className="space-y-1" aria-label="Mobile">
            {isAuthenticated ? (
              <>
                <MobileLink to="/dashboard" icon={LayoutDashboard} onClick={() => setIsSidebarOpen(false)}>Dashboard</MobileLink>
                <MobileLink to="/courses" icon={BookOpen} onClick={() => setIsSidebarOpen(false)}>Courses</MobileLink>
                <MobileLink to="/quiz-hub" icon={Target} onClick={() => setIsSidebarOpen(false)}>Quiz Hub</MobileLink>
                <MobileLink to="/ca" icon={FileText} onClick={() => setIsSidebarOpen(false)}>CA</MobileLink>
                <MobileLink to="/exam" icon={PenTool} onClick={() => setIsSidebarOpen(false)}>Exam</MobileLink>
                <MobileLink to="/results" icon={Award} onClick={() => setIsSidebarOpen(false)}>Results</MobileLink>
                <MobileLink to="/leaderboard" icon={Trophy} onClick={() => setIsSidebarOpen(false)}>Leaderboard</MobileLink>
                <MobileLink to="/profile" icon={User} onClick={() => setIsSidebarOpen(false)}>Profile</MobileLink>
                <MobileLink to="/about" icon={Info} onClick={() => setIsSidebarOpen(false)}>About</MobileLink>
                <MobileLink to="/contact" icon={Mail} onClick={() => setIsSidebarOpen(false)}>Contact</MobileLink>
                <MobileLink to="/terms" icon={ScrollText} onClick={() => setIsSidebarOpen(false)}>Terms</MobileLink>
                <MobileLink to="/privacy" icon={ScrollText} onClick={() => setIsSidebarOpen(false)}>Privacy</MobileLink>
                {user?.isAdmin && (
                  <MobileLink to="/admin/dashboard" icon={Shield} onClick={() => setIsSidebarOpen(false)}>Admin</MobileLink>
                )}
              </>
            ) : (
              <>
                <MobileLink to="/" icon={Home} onClick={() => setIsSidebarOpen(false)}>Home</MobileLink>
                <MobileLink to="/courses" icon={BookOpen} onClick={() => setIsSidebarOpen(false)}>Courses</MobileLink>
                <MobileLink to="/about" icon={Info} onClick={() => setIsSidebarOpen(false)}>About</MobileLink>
                <MobileLink to="/contact" icon={Mail} onClick={() => setIsSidebarOpen(false)}>Contact</MobileLink>
                <MobileLink to="/terms" icon={ScrollText} onClick={() => setIsSidebarOpen(false)}>Terms</MobileLink>
                <MobileLink to="/privacy" icon={ScrollText} onClick={() => setIsSidebarOpen(false)}>Privacy</MobileLink>
              </>
            )}
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-graphite hover:bg-canvas hover:text-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Community
            </a>
          </nav>
        </div>

        <div className="border-t border-line p-4">
          {isAuthenticated ? (
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-graphite hover:bg-canvas hover:text-ink"
            >
              <LogOut className="h-5 w-5" />
              Log out
            </button>
          ) : (
            <Link to="/register" onClick={() => setIsSidebarOpen(false)} className="btn-primary w-full">
              Get started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

const MobileLink = ({ to, icon: Icon, children, onClick }) => {
  const { pathname } = useLocation();
  const active = to === '/courses'
    ? isLearningPath(pathname)
    : to === '/'
      ? pathname === '/'
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <Link
      to={to}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
        active ? 'bg-accent-soft font-medium text-accent' : 'text-graphite hover:bg-canvas hover:text-ink'
      }`}
    >
      <Icon className="h-5 w-5" />
      {children}
    </Link>
  );
};

export default Navbar;
