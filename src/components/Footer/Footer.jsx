import React from "react";
import "./style.css";
import { Icon } from '@iconify/react';
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
          © 2025 MilliBTC &nbsp;|&nbsp; <a href="mailto:hello@millibtc.com">hello@millibtc.com</a>
        </p>
      </div>
    </footer>
  );
};
