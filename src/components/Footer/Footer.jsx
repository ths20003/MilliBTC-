import React from "react";
import "./style.css";
import milliBTCLogoWhite from "../../images/milliBTCLogoWhite.png";

export const Footer = ({ className }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-overlay" />
      <div className="footer-content">
        <img src={milliBTCLogoWhite} alt="MilliBTC Logo" className="footer-logo" />
        <p className="footer-text">
          © 2025 MilliBTC &nbsp;|&nbsp; <a href="mailto:hello@millibtc.com">hello@millibtc.com</a>
        </p>
      </div>
    </footer>
  );
};
