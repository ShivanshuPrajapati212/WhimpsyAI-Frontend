import Benefits from "./ui/Benefits";
import Faqs from "./ui/Faqs";
import Hero from "./ui/Hero";
import Pricing from "./ui/Pricing";
import Testimonials from "./ui/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto bg-base-100 max-w-[60vw]">
        <Hero />
      </div>
      <Benefits />
      <Testimonials/>
      <div className="container mx-auto bg-base-100 max-w-[60vw]">
        <Pricing />
        <Faqs/>
      </div>
    </div>
  );
};

export default Home;
