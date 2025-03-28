import React from "react";
import "./style.css";
import milliBTCLogoWhite from "../../images/milliBTCLogoWhite.png";

export const Footer = ({ className }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={milliBTCLogoWhite} alt="MilliBTC Logo" className="footer-logo" />
        <div className="footer-text">
          <p className="footer-location">
            We’re headquartered in New York with offices in New York and Connecticut
          </p>
          <p className="footer-copyright">
            © 2024 MilliBTC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  );
};
