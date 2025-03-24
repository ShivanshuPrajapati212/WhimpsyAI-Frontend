import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import timeLeftBefore24Hours from "../helpers/timeDifference";
import { useAuth } from './authContext';
import { BACKEND_URL } from '../helpers/backendUrl';

const TopicContext = createContext();




export const TopicProvider = ({ children }) => {
    const [topic, setTopic] = useState(null)
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(topic ? timeLeftBefore24Hours(topic.date) : [0, 0])

    const {checkAuthStatus} = useAuth();




    const getTopic = async () => {
        try {
            checkAuthStatus()
            const res = await axios.get(`${BACKEND_URL}/api/topic/gettopic`, { withCredentials: true })
            setTopic(res.data)
            setTimeLeft(timeLeftBefore24Hours(res.data.date))
            setLoading(false);
        } catch (error) {
            console.log("Error Saving Topic" + error)
            setTopic(null)
        }
    }

    const markLearnt  = async (id) => {
      try { 
        const res = await axios.post(`${BACKEND_URL}/api/topic/marklearnt`, {resourceId: id}, { withCredentials: true })
        setTopic(res.data)
        checkAuthStatus();
      } catch (error) {
        console.log("Error in mark learnt" + error)
      }
    }

  return (
    <TopicContext.Provider value={{ topic, loading, timeLeft, getTopic, markLearnt }}>
      {children}
    </TopicContext.Provider>
  );
};

export const useTopic = () =>  useContext(TopicContext);