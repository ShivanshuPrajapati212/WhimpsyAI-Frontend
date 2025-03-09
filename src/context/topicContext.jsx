import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import timeLeftBefore24Hours from "../helpers/timeDifference";

const TopicContext = createContext();


export const TopicProvider = ({ children }) => {
    const [topic, setTopic] = useState(null)
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(topic ? timeLeftBefore24Hours(topic.date) : [0, 0])


    useEffect(()=> {
        getTopic()
    }, [])
    
    const getTopic = async () => {
        try {
            const res = await axios.get('/api/topic/gettopic', { withCredentials: true })
            setTopic(res.data)
            setTimeLeft(timeLeftBefore24Hours(res.data.date))
            setLoading(false);
        } catch (error) {
            console.log("Error Saving Topic" + error)
            setTopic(null)
        }
    }

  return (
    <TopicContext.Provider value={{ topic, loading, timeLeft, getTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

export const useTopic = () =>  useContext(TopicContext);