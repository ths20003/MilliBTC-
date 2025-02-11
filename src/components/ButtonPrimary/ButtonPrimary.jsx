import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonPrimary = ({
  className,
  divClassName,
  text = "Example text",
}) => {
  return (
    <div className={`button-primary ${className}`}>
      <div className={`example-text-2 ${divClassName}`}>{text}</div>
    </div>
  );
};

ButtonPrimary.propTypes = {
  text: PropTypes.string,
};
