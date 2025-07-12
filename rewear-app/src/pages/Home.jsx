import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/Works";
import FeaturedItems from "../components/FeatureItems";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedItems />
    </div>
  );
};

export default Home;
