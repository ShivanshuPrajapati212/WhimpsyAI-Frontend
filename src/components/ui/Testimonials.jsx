import { MdOutlineStarPurple500 } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className="bg-base-300 flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-10">Words from our learners</h2>
      <div className="flex items-center justify-around gap-10 my-10">
        <li className="list-none flex flex-col items-center justify-center text-center bg-base-200 p-4 card w-[20vw] h-72">
          <p className="text-lg font-medium my-3">
            WhimpsyAI has completely changed how I start my day.
          </p>
          <p className="text-md">
            Instead of scrolling aimlessly, I now spend five minutes learning
            something fascinating. It's quick, fun, and actually sticks with me
            throughout the day.
          </p>
          <p className="text-lg font-semibold mt-5">
            {" "}
            - Sarah M., Product Designer
          </p>
          <div className="flex items-center text-xl text-accent font-semibold">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
        </li>
        <li className="list-none flex flex-col items-center justify-center text-center bg-base-200 p-4 card w-[20vw] h-72 mb-20">
          <p className="text-lg font-medium my-3">
            It feels like this app just gets me.
          </p>
          <p className="text-md">
            The lessons are always spot-on with my interests. I’ve learned more
            in two weeks than I did in months trying to force myself to read
            articles I wasn’t excited about.
          </p>
          <p className="text-lg font-semibold mt-5">
            {" "}
            - James L., Marketing Strategist
          </p>
          <div className="flex items-center text-xl text-accent font-semibold">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
        </li>
        <li className="list-none flex flex-col items-center justify-center text-center bg-base-200 p-4 card w-[20vw] h-72">
          <p className="text-lg font-medium my-3">
            I didn’t think 5 minutes could make this much impact.
          </p>
          <p className="text-md">
            I’ve developed a real learning habit without even trying. Every
            lesson gives me something new to think about—it's now a part of my
            daily mindset reset.
          </p>
          <p className="text-lg font-semibold mt-5">
            {" "}
            — Priya K., Freelance Writer
          </p>
          <div className="flex items-center text-xl text-accent font-semibold">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
        </li>
      </div>
    </div>
  );
};

export default Testimonials;
