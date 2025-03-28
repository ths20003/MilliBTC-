import React from "react";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";

const MenuItem = ({ name, path, hasDropdown }) => {
  return (
    <div className="frame">
      <Link to={path} className="menu-item">{name}</Link>
      {hasDropdown && <SlArrowDown className="icon" color="white" />}
    </div>
  );
};

export default MenuItem;
