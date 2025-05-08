import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../helpers/backendUrl';

console.log(BACKEND_URL)

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/auth/profile`, { withCredentials: true });
      console.log(response.data)
      setUser(response.data);
    } catch (err) {
      setUser(null);
      console.log("Failed to set user, ", err)
    }
    setLoading(false);
    return;
  };

  const login = async (credentials) => {
    await axios.post(`${BACKEND_URL}/api/auth/login`, credentials, { withCredentials: true });
    await checkAuthStatus();
    return;
  };
  const signup = async (credentials) => {
    await axios.post(`${BACKEND_URL}/api/auth/signup`, credentials, { withCredentials: true });
    await checkAuthStatus();
    return;
  };

  const logout = async () => {
    await axios.post(`${BACKEND_URL}/api/auth/logout`, {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, checkAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>  useContext(AuthContext);