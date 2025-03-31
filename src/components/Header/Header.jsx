import React from "react";
import "./style.css";
import milliBTCLogoWhite from "../../images/milliBTCLogoWhite.png";
import { menuItems } from "./menuData";
import MenuItem from "./MenuItem";

export const Header = ({ className = "", overlapGroupClassName = "" }) => {
  return (
    <header className={`header ${className}`}>
        <img
          className="thumbnail-millibtc"
          alt="MilliBTC Logo"
          src={milliBTCLogoWhite}
        />
        <nav className="menu">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </nav>
    </header>
  );
};
