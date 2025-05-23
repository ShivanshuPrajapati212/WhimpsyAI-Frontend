import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold">What this knowledge costs</h2>
      <div className="flex items-center gap-10 my-10">
        <li className="list-none flex flex-col items-center text-center bg-base-300 p-4 card rounded-3xl w-[20vw]">
          <p className="text-2xl font-semibold my-10">
            1 Year Pass
          </p>
          <div className="flex gap-5 items-end justify-center text-xl">
          <del className="">$45</del>
          <p className="text-4xl font-bold">$25</p>
          <p className="">USD</p>
          </div>
          <p className="text-md mt-7">One-time payment. No subscription</p>
          <Link className="btn btn-primary w-72 my-10">Get it now</Link>
        </li>
        <li className="list-none flex flex-col items-center text-center bg-base-300 p-4 card rounded-3xl w-[20vw] border-2 border-accent">
            <span  className="badge badge-accent -top-3 absolute">Popular</span>
          <p className="text-2xl font-semibold my-10">
            Life-Time Deal
          </p>
          <div className="flex gap-5 items-end justify-center text-xl">
          <del className="">$75</del>
          <p className="text-4xl font-bold">$45</p>
          <p className="">USD</p>
          </div>
          <p className="text-md mt-7">One-time payment. No subscription</p>
          <Link className="btn btn-primary w-72 my-10">Get it now</Link>
        </li>
      </div>
    </div>
  );
};

export default Pricing;
