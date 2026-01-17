import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { CheckCircle, XCircle } from 'lucide-react';
import testmancerLogo from '../assets/testmancer-logo.png';

let userLoaded = false;

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loadUser, user } = useAuth();
  const { isDarkMode } = useTheme();
  const [status, setStatus] = useState('processing'); // 'processing', 'success', 'error'
  const [message, setMessage] = useState('Processing your authentication...');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const token = searchParams.get('token');
        const success = searchParams.get('success');
        const error = searchParams.get('error');

        if (error) {
          setStatus('error');
          setMessage('Authentication failed. Please try again.');
          setTimeout(() => navigate('/login'), 3000);
          return;
        }

        if (!token || success !== 'true') {
          setStatus('error');
          setMessage('Invalid authentication response.');
          setTimeout(() => navigate('/login'), 3000);
          return;
        }

        // Store the token
        localStorage.setItem('token', token);

        // Load user data
        await loadUser();

        setStatus('success');
        setMessage('Authentication successful! Redirecting...');

        // Redirect based on profile setup status
        setTimeout(() => {
          // Load user data again after loadUser call
          const updatedUser = JSON.parse(localStorage.getItem('user') || '{}');
          if (updatedUser.isProfileSetupComplete === false) {
            navigate('/profile-setup');
          } else {
            navigate('/dashboard');
          }
        }, 2000);

      } catch (err) {
        console.error('Auth callback error:', err);
        setStatus('error');
        setMessage('An error occurred during authentication.');
        setTimeout(() => navigate('/login'), 3000);
      }
    };

    handleCallback();
  }, [searchParams, navigate, loadUser]);

  // Handle redirection after user data is loaded
  useEffect(() => {
    if (user && status === 'success' && !userLoaded) {
      userLoaded = true;
      setTimeout(() => {
        if (user.isProfileSetupComplete === false) {
          navigate('/profile-setup');
        } else {
          navigate('/dashboard');
        }
      }, 2000);
    }
  }, [user, status, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src={testmancerLogo}
              alt="TestMancer Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            TestMancer
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm card-hover">
          <div className="text-center">
            {status === 'processing' && (
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 dark:border-purple-400 mx-auto mb-4"></div>
            )}

            {status === 'success' && (
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
            )}

            {status === 'error' && (
              <XCircle className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
            )}

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {status === 'processing' && 'Processing...'}
              {status === 'success' && 'Success!'}
              {status === 'error' && 'Authentication Failed'}
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              {message}
            </p>

            {status === 'error' && (
              <button
                onClick={() => navigate('/login')}
                className="mt-4 bg-black dark:bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                Back to Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
