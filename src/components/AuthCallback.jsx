import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { checkAuthStatus } = useAuth();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // With session-based auth, we just need to check auth status
        // as the server has already set cookies during OAuth callback
        await checkAuthStatus();
        
        // Redirect to dashboard after a short delay
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } catch (err) {
        console.error('Error during auth callback:', err);
        navigate('/login');
      }
    };

    handleAuthCallback();
  }, [navigate, checkAuthStatus]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Authentication Successful</h1>
        <p className="text-gray-600 mb-4">Redirecting you to the dashboard...</p>
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default AuthCallback; 