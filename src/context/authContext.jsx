import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../helpers/backendUrl';

// Token storage key
const TOKEN_KEY = 'whimpsyai_auth_token';
const USER_KEY = 'whimpsyai_user';

// Create axios instance with defaults
const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to include token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor to handle expired tokens
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear token and user data if unauthorized
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      window.location.href = '/login'; // Redirect to login
    }
    return Promise.reject(error);
  }
);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      
      // Check for token in URL (for OAuth callbacks)
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      
      // If token is in URL, store it
      if (token && window.location.pathname === '/auth-callback') {
        localStorage.setItem(TOKEN_KEY, token);
      }
      
      // Try to get stored user data
      const storedUser = localStorage.getItem(USER_KEY);
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
          await validateToken(); // Validate token and refresh user data
        } catch (err) {
          console.error('Failed to parse stored user data', err);
          clearAuth();
        }
      } else {
        // If we have a token but no user data, fetch profile
        const storedToken = localStorage.getItem(TOKEN_KEY);
        if (storedToken) {
          await checkAuthStatus();
        }
      }
      
      setLoading(false);
    };
    
    initAuth();
  }, []);
  
  // Validate token is still valid
  const validateToken = async () => {
    try {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) return false;
      
      const response = await api.get('/api/auth/profile');
      setUser(response.data);
      localStorage.setItem(USER_KEY, JSON.stringify(response.data));
      return true;
    } catch (err) {
      clearAuth();
      return false;
    }
  };

  // Clear all auth data
  const clearAuth = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  // Check if user is authenticated
  const checkAuthStatus = async () => {
    try {
      setError(null);
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        clearAuth();
        return false;
      }
      
      const response = await api.get('/api/auth/profile');
      setUser(response.data);
      localStorage.setItem(USER_KEY, JSON.stringify(response.data));
      return true;
    } catch (err) {
      console.error('Auth check failed:', err);
      if (err.response?.status !== 401) { // Only set error for non-auth failures
        setError(err.response?.data?.message || 'Authentication error');
      }
      clearAuth();
      return false;
    }
  };

  // Login with email and password
  const login = async (credentials) => {
    try {
      setError(null);
      const response = await api.post('/api/auth/login', credentials);
      const { token, user: userData } = response.data;
      
      // Store auth data
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(userData));
      setUser(userData);
      
      return { success: true };
    } catch (err) {
      console.error('Login failed:', err);
      const message = err.response?.data?.message || 'Login failed';
      setError(message);
      return { success: false, message };
    }
  };

  // Register new user
  const signup = async (credentials) => {
    try {
      setError(null);
      const response = await api.post('/api/auth/signup', credentials);
      const { token, user: userData } = response.data;
      
      // Store auth data
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(userData));
      setUser(userData);
      
      return { success: true };
    } catch (err) {
      console.error('Signup failed:', err);
      const message = err.response?.data?.message || 'Signup failed';
      setError(message);
      return { success: false, message };
    }
  };

  // Log out user
  const logout = async () => {
    try {
      await api.post('/api/auth/logout');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      clearAuth();
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      error,
      login, 
      signup, 
      logout, 
      checkAuthStatus,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);