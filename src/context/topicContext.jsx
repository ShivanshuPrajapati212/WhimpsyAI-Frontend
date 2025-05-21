import { createContext, useContext, useState } from 'react';
import timeLeftBefore24Hours from "../helpers/timeDifference";
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

const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
    const [topic, setTopic] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(topic ? timeLeftBefore24Hours(topic.date) : [0, 0]);
    const [error, setError] = useState(null);

    const { checkAuthStatus } = useAuth();

    const getTopic = async () => {
        try {
            setError(null);
            await checkAuthStatus();
            const res = await api.get('/api/topic/gettopic');
            setTopic(res.data);
            setTimeLeft(timeLeftBefore24Hours(res.data.date));
            setLoading(false);
        } catch (error) {
            console.error("Error fetching topic:", error);
            setError(error.response?.data?.message || "Failed to load topic");
            setTopic(null);
            setLoading(false);
        }
    }

    const markLearnt = async (id) => {
      try { 
        const res = await api.post('/api/topic/marklearnt', { resourceId: id });
        setTopic(res.data);
        await checkAuthStatus();
      } catch (error) {
        console.error("Error marking as learned:", error);
        setError(error.response?.data?.message || "Failed to mark as learned");
      }
    }

  return (
    <TopicContext.Provider value={{ topic, loading, timeLeft, error, getTopic, markLearnt }}>
      {children}
    </TopicContext.Provider>
  );
};

export const useTopic = () => useContext(TopicContext);