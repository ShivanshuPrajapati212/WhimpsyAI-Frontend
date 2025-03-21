import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  return (
    <div className="gap-4 flex">
      <button className="btn btn-primary">
      <a href="/profile">Profile</a>
      </button>
      <button className="btn btn-primary">
      <a href="/dashboard">Dashboard</a>
      </button>
      <button className="btn btn-info">
      <a href="/onboarding">On Boarding</a>
      </button>
      <button className="btn btn-primary" onClick={handleLogout}>
        <a>Logout</a>
      </button>
      <button className="btn btn-accent">
        <a href="/signup">Sign up</a>
      </button>
      <button className="btn btn-success">
        <a href="/login">Login</a>
      </button>
    </div>
  );
};

export default Home;