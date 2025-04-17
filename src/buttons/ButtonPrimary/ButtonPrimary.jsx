import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonPrimary = ({
  className,
  divClassName,
  text = "Example text",
  onClick,
}) => {
  return (
    <div className={`button-primary ${className}`} onClick={onClick}>
      <div className={`example-text-2 ${divClassName}`}>{text}</div>
    </div>
  );
};

ButtonPrimary.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
