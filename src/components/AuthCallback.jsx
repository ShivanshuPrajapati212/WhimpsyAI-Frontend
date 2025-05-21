import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { checkAuthStatus } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Extract token from URL query parameters
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        
        if (!token) {
          setError('No authentication token found');
          setTimeout(() => navigate('/login'), 2000);
          return;
        }
        
        // Store token and validate by checking auth status
        localStorage.setItem('whimpsyai_auth_token', token);
        const success = await checkAuthStatus();
        
        if (success) {
          // Redirect to dashboard on success
          setTimeout(() => navigate('/dashboard'), 1500);
        } else {
          setError('Authentication failed');
          setTimeout(() => navigate('/login'), 2000);
        }
      } catch (err) {
        console.error('Error during auth callback:', err);
        setError('Authentication failed');
        setTimeout(() => navigate('/login'), 2000);
      }
    };

    handleAuthCallback();
  }, [navigate, checkAuthStatus]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        {error ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-red-600">Authentication Error</h1>
            <p className="text-gray-600 mb-4">{error}</p>
            <p className="text-gray-500">Redirecting to login...</p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-primary">Authentication Successful</h1>
            <p className="text-gray-600 mb-4">Redirecting you to the dashboard...</p>
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallback; 