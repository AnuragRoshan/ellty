import { useState } from "react";
import "./App.css";
import CheckboxWithLabel from "./components/LabelBox/LabelBox";
import Box from "./components/Box/Box";
import Button from "./components/Button/Button";
import Check from "./components/CheckBox/check";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="top">
      <div className="inner-box">
        <CheckboxWithLabel
          label="All Pages"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="horizontal-line">
          <hr className="grey-line" />
        </div>
        <CheckboxWithLabel
          label="Page 1"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CheckboxWithLabel
          label="Page 2"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CheckboxWithLabel
          label="Page 3"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CheckboxWithLabel
          label="Page 4"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="horizontal-line">
          <hr className="grey-line" />
        </div>

        <div className="button-div">
          <Button children={"Click Me"}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
