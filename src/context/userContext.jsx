import { createContext, useContext } from 'react';
import axios from 'axios';
import { useAuth } from './authContext';

const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const {checkAuthStatus}  = useAuth();

    const updateUser = async (data) => {
        await axios.post('/api/user/updateuser', data, { withCredentials: true });
        await checkAuthStatus();
        return;
    }

  return (
    <UserContext.Provider value={{ updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () =>  useContext(UserContext);