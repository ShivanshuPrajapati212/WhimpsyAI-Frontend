import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useAuth } from './authContext';
import { BACKEND_URL } from '../helpers/backendUrl';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { checkAuthStatus } = useAuth();
    const [error, setError] = useState(null);

    const updateUser = async (data) => {
        try {
            setError(null);
            await axios.post(`${BACKEND_URL}/api/user/updateuser`, data, { 
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            await checkAuthStatus();
            return true;
        } catch (err) {
            console.error("Error updating user:", err);
            setError(err.response?.data?.message || "Failed to update user profile");
            return false;
        }
    }

    return (
        <UserContext.Provider value={{ updateUser, error }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);