import React from "react";
import { ButtonPrimary } from "../../buttons/ButtonPrimary";
import "./style.css";

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <h2>WHO ARE WE?</h2>
      <p>
        MilliBTC empowers businesses to adopt Bitcoin with secure, self-hosted solutions for full control over their
        transactions.
      </p>
      <ButtonPrimary text="Get Started" />
    </section>
  );
};

export default WhoWeAre;
