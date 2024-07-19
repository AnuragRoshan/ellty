import React from "react";
import "./box.css";
import CheckboxWithLabel from "../LabelBox/LabelBox";

const Box = () => {
  return (
    <div className="box">
      <CheckboxWithLabel
        label="My Checkbox"
        checked={"isChecked"}
        onChange={"handleCheckboxChange"}
      />
    </div>
  );
};

export default Box;
