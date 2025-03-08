import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const TopicContext = createContext();


export const TopicProvider = ({ children }) => {
    const [topic, setTopic] = useState(null)


    useEffect(()=> {
        getTopic()
    }, [])
    
    const getTopic = async () => {
        try {
            const res = await axios.get('/api/topic/gettopic', { withCredentials: true })
            setTopic(res.data)
            console.log("Topic Saved Successfully")
            console.log(topic)
        } catch (error) {
            console.log("Error Saving Topic" + error)
            setTopic(null)
        }
    }

  return (
    <TopicContext.Provider value={{ topic, getTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

export const useTopic = () =>  useContext(TopicContext);