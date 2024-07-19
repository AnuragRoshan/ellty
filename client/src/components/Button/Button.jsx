import React from "react";
import "./button.css";

const Button = ({ children }) => {
  const showToast = () => {
    alert("Button Clicked");
  };
  return (
    <button className="custom-button" onClick={showToast()}>
      {children}
    </button>
  );
};

export default Button;
