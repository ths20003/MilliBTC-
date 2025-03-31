import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const MenuItem = ({ name, path, hasDropdown, icon }) => {
  const location = useLocation();

  return (
    <div className="frame">
      <Link to={path} className="menu-item">
        {name}
        {location.pathname === path && icon && (
          <Icon icon={icon} className="menu-icon" />
        )}
      </Link>
    </div>
  );
};

export default MenuItem;
