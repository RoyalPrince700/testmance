import { createBrowserRouter, RouterProvider, Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { isReservedPath } from './utils/slugs';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthCallback from './pages/AuthCallback';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import { ChapterDetail } from './pages/chapters';
import { Quiz, QuizHub, QuizCourseDetail } from './pages/quizzes';
import { CAPage } from './pages/ca';
import { ExamPage } from './pages/exam';
import { ResultsPage } from './pages/results';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import ProfileSetup from './pages/ProfileSetup';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import testmancerLogo from './assets/testmancer-logo.png';

const AuthLoading = () => (
  <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center px-5">
    <div className="w-full rounded-3xl border border-line bg-surface px-6 py-16 text-center" role="status" aria-live="polite">
      <img src={testmancerLogo} alt="" className="mx-auto h-7 w-auto" />
      <p className="mt-6 text-sm font-medium text-accent">One moment</p>
      <div className="mx-auto mt-6 h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
    </div>
  </div>
);

// Layout Component
const Layout = () => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);
  const knownSingle = new Set(['about', 'contact', 'terms', 'privacy', 'login', 'register', 'profile-setup', 'dashboard', 'courses', 'quiz-hub', 'ca', 'exam', 'results', 'leaderboard', 'profile']);
  const isCourseDetail = (segments.length === 1 && !knownSingle.has(segments[0])) || (segments[0] === 'courses' && segments.length === 2);
  const isChapterReader = pathname.startsWith('/chapters/') || (segments.length === 2 && !['courses', 'quiz-hub', 'ca', 'exam', 'admin', 'auth', 'quizzes'].includes(segments[0]));
  const isQuiz = pathname.startsWith('/quizzes/') || pathname.startsWith('/quiz-hub/');
  const isAdmin = pathname.startsWith('/admin');
  const isFullBleed = isAdmin || isQuiz || isCourseDetail || isChapterReader || pathname === '/' || pathname === '/courses' || pathname === '/about' || pathname === '/contact' || pathname === '/terms' || pathname === '/privacy' || pathname === '/login' || pathname === '/register' || pathname.startsWith('/auth/') || pathname === '/dashboard' || pathname === '/quiz-hub' || pathname === '/results' || pathname === '/profile' || pathname === '/leaderboard' || pathname === '/ca' || pathname.startsWith('/ca/') || pathname === '/exam' || pathname.startsWith('/exam/');

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      {isFullBleed ? (
        <Outlet />
      ) : (
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      )}
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <AuthLoading />
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <AuthLoading />
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return isAdmin ? children : <Navigate to="/dashboard" />;
};

// Public Route Component (redirects to dashboard if authenticated)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <AuthLoading />
    );
  }

  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};

// Profile Setup Route Component (only for users who need profile setup)
const ProfileSetupRoute = ({ children }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <AuthLoading />
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If profile is already setup, redirect to dashboard
  if (user?.isProfileSetupComplete !== false) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

const ReadableCourseRoute = ({ children }) => {
  const { courseSlug } = useParams();
  if (isReservedPath(courseSlug)) return <DefaultRoute />;
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

// Default Route Component (redirects authenticated users to dashboard, others to home)
const DefaultRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <AuthLoading />
    );
  }

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PublicRoute><Home /></PublicRoute>,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "login",
        element: <PublicRoute><Login /></PublicRoute>,
      },
      {
        path: "register",
        element: <PublicRoute><Register /></PublicRoute>,
      },
      {
        path: "auth/callback",
        element: <AuthCallback />,
      },
      {
        path: "profile-setup",
        element: <ProfileSetupRoute><ProfileSetup /></ProfileSetupRoute>,
      },
      {
        path: "dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:courseSlug",
        element: <ProtectedRoute><CourseDetail /></ProtectedRoute>,
      },
      {
        path: "chapters/:id",
        element: <ProtectedRoute><ChapterDetail /></ProtectedRoute>,
      },
      {
        path: ":courseSlug",
        element: <ReadableCourseRoute><CourseDetail /></ReadableCourseRoute>,
      },
      {
        path: ":courseSlug/:chapterSlug",
        element: <ReadableCourseRoute><ChapterDetail /></ReadableCourseRoute>,
      },
      {
        path: "quizzes/:chapterId",
        element: <ProtectedRoute><Quiz /></ProtectedRoute>,
      },
      {
        path: "quiz-hub",
        element: <ProtectedRoute><QuizHub /></ProtectedRoute>,
      },
      {
        path: "quiz-hub/courses/:courseSlug",
        element: <ProtectedRoute><QuizCourseDetail /></ProtectedRoute>,
      },
      {
        path: "quiz-hub/:courseSlug",
        element: <ProtectedRoute><QuizCourseDetail /></ProtectedRoute>,
      },
      {
        path: "quiz-hub/:courseSlug/:chapterSlug",
        element: <ProtectedRoute><Quiz /></ProtectedRoute>,
      },
      {
        path: "ca",
        element: <ProtectedRoute><CAPage /></ProtectedRoute>,
      },
      {
        path: "ca/:courseId",
        element: <ProtectedRoute><CAPage /></ProtectedRoute>,
      },
      {
        path: "exam",
        element: <ProtectedRoute><ExamPage /></ProtectedRoute>,
      },
      {
        path: "exam/:courseId",
        element: <ProtectedRoute><ExamPage /></ProtectedRoute>,
      },
      {
        path: "results",
        element: <ProtectedRoute><ResultsPage /></ProtectedRoute>,
      },
      {
        path: "leaderboard",
        element: <ProtectedRoute><Leaderboard /></ProtectedRoute>,
      },
      {
        path: "profile",
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
      },
      {
        path: "admin/dashboard",
        element: <AdminRoute><AdminDashboard /></AdminRoute>,
      },
      {
        path: "admin/users",
        element: <AdminRoute><AdminUsers /></AdminRoute>,
      },
      {
        path: "admin/analytics",
        element: <AdminRoute><AdminAnalytics /></AdminRoute>,
      },
      {
        path: "*",
        element: <DefaultRoute />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
