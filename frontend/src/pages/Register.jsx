import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import testmancerLogo from '../assets/testmancer-logo.png';

const Register = () => {
  const { googleLogin, clearError } = useAuth();
  const location = useLocation();
  const notice = location.state?.message;

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center px-5 py-16 md:min-h-[calc(100vh-4rem)] md:px-8">
      <div className="mx-auto w-full max-w-md">
        <img src={testmancerLogo} alt="" className="h-8 w-auto" />
        <p className="rise-in mt-8 text-sm font-medium text-accent">Sign up</p>
        <h1
          className="rise-in mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]"
          style={{ animationDelay: '70ms' }}
        >
          Sign up with Google.
        </h1>
        <p className="rise-in mt-4 text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
          Create an account to open courses, quizzes, and gems.
        </p>

        {notice && (
          <p className="rise-in mt-6 rounded-2xl bg-accent-soft px-4 py-3 text-sm text-accent" style={{ animationDelay: '180ms' }}>
            {notice}
          </p>
        )}

        <button
          type="button"
          onClick={googleLogin}
          className="btn-secondary rise-in mt-8 h-12 w-full text-base"
          style={{ animationDelay: '210ms' }}
        >
          <FcGoogle className="h-5 w-5" />
          Sign up with Google
        </button>
        <p className="rise-in mt-4 text-sm leading-relaxed text-slate" style={{ animationDelay: '280ms' }}>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-accent">Sign in</Link>
        </p>
        <p className="rise-in mt-3 text-sm leading-relaxed text-slate" style={{ animationDelay: '320ms' }}>
          By continuing, you agree to the{' '}
          <Link to="/terms" className="font-medium text-accent">Terms</Link>
          {' '}and the{' '}
          <Link to="/privacy" className="font-medium text-accent">Privacy policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default Register;
