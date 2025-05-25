import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import hero from "../../assets/hero.png";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Hero = () => {
  return (
    <main className="flex max-md:flex-col items-center justify-center h-[75vh] max-md:min-h-screen gap-14">
        <div className="">
          <h1 className="text-5xl max-md:text-3xl font-bold mb-8 max-md:mb-4">
            Get a fresh nugget of knowledge every morning.
          </h1>
          <h3 className="text-lg max-md:text-sm">
            WhimpsyAI delivers personalized, bite-sized lessons based on your
            interests. By giving you <span className='underline decoration-wavy text-error'>3 youtube videos</span> and <span className='underline decoration-wavy text-accent'>5 articles</span> to learn from.
          </h3>
          <Link className="btn btn-primary w-80 mt-16" to='/signup'>
            Start Learning &rarr;
          </Link>
          <div className="flex items-center text-xl text-accent gap-3 mt-6 font-semibold">
            <p className="text-base-content">Excellent</p>{" "}
            <div className="flex items-center text-2xl">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            </div>
          </div>
        <div className="text-lg text-base-content font-medium">reviews by <span className="underline decoration-wavy text-accent">1258</span> learners</div>
        </div>
        <div className="flex items-center justify-center">
          <img src={hero} className="scale-125 ml-10" alt="" />
        </div>
      </main>
  )
}

export default Hero
