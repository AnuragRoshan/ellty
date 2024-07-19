import React from "react";
import "./LabelBox.css";
import Check from "../CheckBox/check";

const CheckboxWithLabel = ({ label }) => {
  const [isHover, setIsHover] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      className="checkbox-container"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={() => setChecked(!checked)}
    >
      <label className="checkbox-label">{label}</label>

      <Check checked={checked} isHover={isHover} isPressed={isPressed} />
    </div>
  );
};

export default CheckboxWithLabel;
