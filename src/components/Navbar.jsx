import React from "react";
import { useAuth } from "../context/authContext";
import {getUserLevel, levelThresholds} from "../helpers/levels";

const Navbar = () => {
  const { user } = useAuth();

  if (!user) {
    return;
  }

  const nextLevel = levelThresholds.find((e) => e.level == (getUserLevel(user.xp) + 1))

  return (
    <div className="flex items-center justify-between font-bold text-3xl h-20 p-5">
      <div>Hi, {user.name}</div>
      <div className=" flex gap-3 justify-center items-center">
        <div className="relative ">
      <progress className="progress progress-primary w-72 h-5" value={(user.xp/nextLevel.xp)*100} max="100"></progress>
      <p className="text-sm text-primary-content absolute top-1/4 left-4">XP {user.xp} / {nextLevel.xp}</p>
      </div>
        ·
        <span className="text-secondary">Level {getUserLevel(user.xp)}</span>
      </div>
    </div>
  );
};

export default Navbar;
