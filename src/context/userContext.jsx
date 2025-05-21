import { createContext, useContext, useState } from 'react';
import { useAuth } from './authContext';
import { BACKEND_URL } from '../helpers/backendUrl';

// Token storage key - must match authContext
const TOKEN_KEY = 'whimpsyai_auth_token';

// Create axios instance with defaults
import axios from 'axios';
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

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { checkAuthStatus } = useAuth();
    const [error, setError] = useState(null);

    const updateUser = async (data) => {
        try {
            setError(null);
            await api.post('/api/user/updateuser', data);
            await checkAuthStatus();
            return { success: true };
        } catch (err) {
            console.error("Error updating user:", err);
            const message = err.response?.data?.message || "Failed to update user profile";
            setError(message);
            return { success: false, message };
        }
    }

    return (
        <UserContext.Provider value={{ updateUser, error }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);