import { createContext, useContext } from 'react';
import axios from 'axios';
import { useAuth } from './authContext';
import { BACKEND_URL } from '../helpers/backendUrl';

const UserContext = createContext();



export const UserProvider = ({ children }) => {
    const {checkAuthStatus}  = useAuth();

    const updateUser = async (data) => {
        await axios.post(`${BACKEND_URL}/api/user/updateuser`, data, { withCredentials: true });
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