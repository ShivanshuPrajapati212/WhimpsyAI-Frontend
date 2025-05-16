import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import timeLeftBefore24Hours from "../helpers/timeDifference";
import { useAuth } from './authContext';
import { BACKEND_URL } from '../helpers/backendUrl';

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
            const res = await axios.get(`${BACKEND_URL}/api/topic/gettopic`, { 
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
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
            const res = await axios.post(`${BACKEND_URL}/api/topic/marklearnt`, 
                { resourceId: id }, 
                { 
                    withCredentials: true,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            setTopic(res.data);
            await checkAuthStatus();
        } catch (error) {
            console.error("Error marking topic as learnt:", error);
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