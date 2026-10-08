import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CheckCircle, XCircle } from 'lucide-react';
import testmancerLogo from '../assets/testmancer-logo.png';

let userLoaded = false;

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loadUser, user } = useAuth();
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('Checking your Google account.');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const token = searchParams.get('token');
        const success = searchParams.get('success');
        const error = searchParams.get('error');

        if (error) {
          setStatus('error');
          setMessage('Google sign-in did not finish. Try again from the sign-in page.');
          setTimeout(() => navigate('/login'), 3000);
          return;
        }

        if (!token || success !== 'true') {
          setStatus('error');
          setMessage('The sign-in link was incomplete. Try again from the sign-in page.');
          setTimeout(() => navigate('/login'), 3000);
          return;
        }

        // Store the token
        localStorage.setItem('token', token);

        // Load user data
        await loadUser();

        setStatus('success');
        setMessage('Taking you to your courses.');

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
        setMessage('Something went wrong while signing you in. Try again.');
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

  const title = status === 'success' ? "You're in." : status === 'error' ? "That didn't work." : 'One moment.';

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center px-5 py-16 md:min-h-[calc(100vh-4rem)] md:px-8">
      <div className="mx-auto w-full max-w-md">
        <img src={testmancerLogo} alt="" className="h-7 w-auto" />
        <p className="mt-8 text-sm font-medium text-accent">
          {status === 'success' ? 'Signed in' : 'Sign in'}
        </p>
        <h1 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-graphite">{message}</p>

        <div className="mt-8">
          {status === 'processing' && (
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
          )}
          {status === 'success' && (
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <CheckCircle className="h-5 w-5" strokeWidth={1.75} />
            </div>
          )}
          {status === 'error' && (
            <>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <XCircle className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <button type="button" onClick={() => navigate('/login')} className="btn-primary mt-6">
                Back to sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
