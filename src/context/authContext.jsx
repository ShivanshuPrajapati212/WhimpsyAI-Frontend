import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../helpers/backendUrl';

console.log(BACKEND_URL)

// Configure axios defaults for credentials
axios.defaults.withCredentials = true;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      setError(null);
      const response = await axios.get(`${BACKEND_URL}/api/auth/profile`, { 
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setUser(response.data);
    } catch (err) {
      setUser(null);
      if (err.response?.status !== 401) { // Don't set error for normal unauthorized cases
        setError(err.response?.data?.message || 'Authentication error');
      }
      console.log("Auth status check failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setError(null);
      const response = await axios.post(`${BACKEND_URL}/api/auth/login`, credentials, { 
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      await checkAuthStatus(); // Get the user data after successful login
      return { success: true, data: response.data };
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      console.error("Login error:", error);
      throw error;
    }
  };

  const signup = async (credentials) => {
    try {
      setError(null);
      await axios.post(`${BACKEND_URL}/api/auth/signup`, credentials, { 
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      await checkAuthStatus(); // Get the user data after successful signup
      return { success: true };
    } catch (error) {
      setError(error.response?.data?.message || 'Signup failed');
      console.error("Signup error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/auth/logout`, {}, { 
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setUser(null);
      return true;
    } catch (error) {
      console.error("Logout error:", error);
      return false;
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