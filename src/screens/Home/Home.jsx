import React from "react";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      
      <HeroSection />
      <WhatWeDo />
      
    </div>
  );
};
