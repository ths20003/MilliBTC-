import React from "react";
import "./style.css";
import { menuItems } from "./menuData";
import MenuItem from "./MenuItem";
import milliBTCLogoBlack from "../../images/mlliBTCLogoBlack.png";
import { Icon } from "@iconify/react";
import lightningBolt from "@iconify/icons-mdi/flash";

export const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="logo-section">
        <img
          className="thumbnail-millibtc"
          alt="MilliBTC Logo"
          src={milliBTCLogoBlack}
        />
        <Icon icon={lightningBolt} className="bolt-icon" />
      </div>
      <nav className="menu">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </nav>
    </header>
  );
};
