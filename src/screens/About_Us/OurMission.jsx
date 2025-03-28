import React from "react";
import "./style.css";

const OurMission = () => {
  return (
    <section className="our-mission">
      <h2>OUR CONCEPT & MISSION</h2>
      <p className="mission-text">
        Our mission is to empower businesses with secure, adaptable Bitcoin payment solutions, aiming to become a leader
        in cryptocurrency payments.
      </p>

      <div className="mission-stats">
        <div className="stat">
          <span className="stat-number">1500+</span>
          <p>Nodes</p>
        </div>
        <div className="stat">
          <span className="stat-number">50+</span>
          <p>Business enrollments</p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
