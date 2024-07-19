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

  const labels = ["All Pages", "Page 1", "Page 2", "Page 3", "Page 4"];

  return (
    <div className="top">
      <div className="inner-box">
        {labels.map((label, index) => (
          <div key={index}>
            <CheckboxWithLabel
              label={label}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            {index === 0 || index === labels.length - 1 ? (
              <div className="horizontal-line">
                <hr className="grey-line" />
              </div>
            ) : null}
          </div>
        ))}
        <div className="button-div">
          <Button children={"Done"} />
        </div>
      </div>
    </div>
  );
}

export default App;
