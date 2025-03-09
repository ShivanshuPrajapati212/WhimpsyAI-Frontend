import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <span className="loading loading-spinner loading-lg"></span>;
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;