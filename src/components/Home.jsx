import Benefits from "./ui/Benefits";
import Hero from "./ui/Hero";
import Testimonials from "./ui/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto bg-base-100 max-w-[60vw]">
        <Hero />
      </div>
      <Benefits />
      <Testimonials/>
    </div>
  );
};

export default Home;
