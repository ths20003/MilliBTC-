import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonSecondary = ({
  className,
  divClassName,
  text = "Example text",
}) => {
  return (
    <div className={`button-secondary ${className}`}>
      <div className={`example-text ${divClassName}`}>{text}</div>
    </div>
  );
};

ButtonSecondary.propTypes = {
  text: PropTypes.string,
};
