import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { GraduationCap, CheckCircle, XCircle } from 'lucide-react';

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loadUser } = useAuth();
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

        // Redirect to dashboard after a short delay
        setTimeout(() => navigate('/dashboard'), 2000);

      } catch (err) {
        console.error('Auth callback error:', err);
        setStatus('error');
        setMessage('An error occurred during authentication.');
        setTimeout(() => navigate('/login'), 3000);
      }
    };

    handleCallback();
  }, [searchParams, navigate, loadUser]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <GraduationCap className="h-12 w-12 text-purple-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            TestMancer
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm card-hover">
          <div className="text-center">
            {status === 'processing' && (
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            )}

            {status === 'success' && (
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            )}

            {status === 'error' && (
              <XCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            )}

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {status === 'processing' && 'Processing...'}
              {status === 'success' && 'Success!'}
              {status === 'error' && 'Authentication Failed'}
            </h3>

            <p className="text-gray-600">
              {message}
            </p>

            {status === 'error' && (
              <button
                onClick={() => navigate('/login')}
                className="mt-4 bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
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
