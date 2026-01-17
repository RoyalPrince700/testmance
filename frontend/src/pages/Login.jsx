import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { FcGoogle } from 'react-icons/fc';
import testmancerLogo from '../assets/testmancer-logo.png';

const Login = () => {
  const { googleLogin, clearError } = useAuth();
  const { isDarkMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  return (
    <div className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src={testmancerLogo}
              alt="TestMancer Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to TestMancer
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Sign in with Google to continue your learning journey
          </p>
          {location.state?.message && (
            <p className="mt-2 text-sm text-purple-600 dark:text-purple-400 font-medium">
              {location.state.message}
            </p>
          )}
        </div>

        {/* Google Sign In */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm card-hover">
          <button
            onClick={googleLogin}
            className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-colors flex items-center justify-center gap-3"
          >
            <FcGoogle className="h-5 w-5" />
            Continue with Google
          </button>

          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Sign in to start your learning journey
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
