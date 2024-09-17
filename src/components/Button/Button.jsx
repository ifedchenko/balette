import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ additionalClass, buttonText }) => {
  const additionalClassName = additionalClass ? ` ${additionalClass}` : "";

  return (
    <button className={`${styles.button} ${additionalClassName}`}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
};

export default Button;
