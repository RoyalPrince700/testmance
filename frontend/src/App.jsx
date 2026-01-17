import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
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
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminAnalytics from './pages/admin/AdminAnalytics';

// Layout Component
const Layout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">TestMancer</h1>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">TestMancer</h1>
      </div>
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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">TestMancer</h1>
      </div>
    );
  }

  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};

// Profile Setup Route Component (only for users who need profile setup)
const ProfileSetupRoute = ({ children }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">TestMancer</h1>
      </div>
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

// Default Route Component (redirects authenticated users to dashboard, others to home)
const DefaultRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">TestMancer</h1>
      </div>
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
        path: "login",
        element: <PublicRoute><Login /></PublicRoute>,
      },
      {
        path: "register",
        element: <Navigate to="/login" />,
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
        path: "courses/:id",
        element: <ProtectedRoute><CourseDetail /></ProtectedRoute>,
      },
      {
        path: "chapters/:id",
        element: <ProtectedRoute><ChapterDetail /></ProtectedRoute>,
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
        path: "quiz-hub/courses/:id",
        element: <ProtectedRoute><QuizCourseDetail /></ProtectedRoute>,
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
