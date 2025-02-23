import React, { useEffect } from "react";

const Home = () => {
  return (
    <div>
      <button className="btn btn-primary">Dashboard</button>
      <button
        className="btn btn-error"
        onClick={localStorage.removeItem("authToken")}
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
