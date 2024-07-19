import React, { useState } from "react";
import "./check.css";
import { getBgColor, getColor } from "../../utils";

const Check = ({ checked, isHover, isPressed, onChange }) => {
  return (
    <div
      className="check-top"
      style={{ backgroundColor: getBgColor(checked, isHover, isPressed) }}
      onClick={onChange}
    >
      <svg
        width="19"
        height="14"
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
          stroke={getColor(checked, isHover, isPressed)}
          stroke-linecap="round"
          style={{
            transition: "0.2s",
          }}
        />
      </svg>
    </div>
  );
};

export default Check;
