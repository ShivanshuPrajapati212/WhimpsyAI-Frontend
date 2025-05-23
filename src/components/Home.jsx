import Benefits from "./ui/Benefits";
import Cta from "./ui/Cta";
import Faqs from "./ui/Faqs";
import Footer from "./ui/Footer";
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
      <Cta/>
      <div className="container mx-auto bg-base-100 max-w-[60vw]">
      <Footer/>
      </div>

    </div>
  );
};

export default Home;
