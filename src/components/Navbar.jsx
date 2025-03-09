import React from "react";
import { useAuth } from "../context/authContext";
import getUserLevel from "../helpers/levels";

const Navbar = () => {
  const { user } = useAuth();

  if (!user) {
    return;
  }

  return (
    <div className="flex items-center justify-between font-bold text-3xl h-20 p-5">
      <div>Hi, {user.name}</div>
      <div className=" flex gap-3">
        <span className="text-primary">XP {user.xp}</span>
        ·
        <span className="text-secondary">Level {getUserLevel(user.xp)}</span>
      </div>
    </div>
  );
};

export default Navbar;
