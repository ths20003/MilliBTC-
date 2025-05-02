import React from "react";
import "./style.css";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import milliBTCLogoBlack from "../../images/mlliBTCLogoBlack.png";
import lightningBolt from "@iconify/icons-mdi/flash";

export const Footer = ({ className }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-overlay" />
      <div className="footer-content">
        <img src={milliBTCLogoBlack} alt="MilliBTC Logo" className="footer-logo" />
        <Icon icon={lightningBolt} className="bolt-icon-footer" />
        <p className="footer-text">
          © 2025 MilliBTC &nbsp;|&nbsp; <a href="mailto:info@millibtc.solutions">info@millibtc.solutions</a>
        </p>
      </div>

      <div className="footer-links">
      <Link to="/termsOfUse">Terms of Use</Link>
      <Link to="/privacyPolicy">Privacy Policy</Link>
      <Link to="/copyright">Copyright</Link>
    </div>
    </footer>
  );
};
