import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get('/api/auth/profile', { withCredentials: true });
      // console.log(response)
      setUser(response.data);
    } catch (err) {
      setUser(null);
    }
    setLoading(false);
  };

  const login = async (credentials) => {
    await axios.post('/api/auth/login', credentials, { withCredentials: true });
    await checkAuthStatus();
    return;
  };
  const signup = async (credentials) => {
    await axios.post('/api/auth/signup', credentials, { withCredentials: true });
    await checkAuthStatus();
    return;
  };

  const logout = async () => {
    await axios.post('/api/auth/logout', {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>  useContext(AuthContext);