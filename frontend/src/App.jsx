import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
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
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import ProfileSetup from './pages/ProfileSetup';
import AboutUs from './pages/AboutUs';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-3xl font-bold text-gray-900">TestMancer</h1>
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-3xl font-bold text-gray-900">TestMancer</h1>
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-3xl font-bold text-gray-900">TestMancer</h1>
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-3xl font-bold text-gray-900">TestMancer</h1>
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-3xl font-bold text-gray-900">TestMancer</h1>
      </div>
    );
  }

  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/register" element={<Navigate to="/login" />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="/profile-setup" element={<ProfileSetupRoute><ProfileSetup /></ProfileSetupRoute>} />

              {/* Protected Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/courses/:id" element={<ProtectedRoute><CourseDetail /></ProtectedRoute>} />
              
              {/* Public Routes - Courses page accessible to all */}
              <Route path="/courses" element={<Courses />} />
              <Route path="/chapters/:id" element={<ProtectedRoute><ChapterDetail /></ProtectedRoute>} />
              <Route path="/quizzes/:chapterId" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
              <Route path="/quiz-hub" element={<ProtectedRoute><QuizHub /></ProtectedRoute>} />
              <Route path="/quiz-hub/courses/:id" element={<ProtectedRoute><QuizCourseDetail /></ProtectedRoute>} />
              <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/users" element={<AdminRoute><AdminUsers /></AdminRoute>} />

              {/* Catch all route */}
              <Route path="*" element={<DefaultRoute />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
