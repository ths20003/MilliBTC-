import React from "react";
import { ButtonSecondary } from "../../buttons/ButtonSecondary";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import OurMission from "./OurMission";
import WhoWeAre from "./WhoWeAre";
import "./style.css";

export const AboutUs = () => {
  return (
    <div className="about-us">
      
      <OurMission />
      <WhoWeAre />
      
    </div>
  );
};
