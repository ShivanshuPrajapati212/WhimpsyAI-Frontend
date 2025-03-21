import React from "react";
import { useAuth } from "../context/authContext.jsx";
import { getUserLevel, levelThresholds } from "../helpers/levels";

const Navbar = () => {
  const { user } = useAuth();

  if (!user) {
    return;
  }

  const nextLevel = levelThresholds.find(
    (e) => e.level == getUserLevel(user.xp) + 1
  );

  return (
    <div className="flex max-md:flex-col max-md:items-start items-center justify-between font-bold text-3xl max-md:text-xl h-20 p-5 space-y-2">
      <div>Hi, {user.name}</div>
      <div className=" flex gap-3 justify-center items-center">
        <div className="relative ">
          <progress
            className="progress progress-secondary w-72 max-md:w-[50vw] h-5"
            value={(user.xp / nextLevel.xp) * 100}
            max="100"
          ></progress>
          <p className="text-sm text-primary-content absolute top-1/4 max-md:top-0.5 left-4">
            XP {user.xp} / {nextLevel.xp}
          </p>
        </div>
        ·<span className="text-primary">Level {getUserLevel(user.xp)}</span>
      </div>
    </div>
  );
};

export default Navbar;
