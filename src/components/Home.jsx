import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    navigate("/api/logout")
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={<Navigate to="/profile" />}>Profile</button>
      <button
        className="btn btn-error"
        onClick={handleLogout}
      >
        Logout
      </button>
      <button className="btn btn-primary">
        <a href="/signup">Sign up</a>
      </button>
      <button className="btn btn-primary">
        <a href="/login">Login</a>
      </button>
    </div>
  );
};

export default Home;
