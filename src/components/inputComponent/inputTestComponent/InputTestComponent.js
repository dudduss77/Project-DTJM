import React, {useState} from "react";
import "./InputTestComponent.scss";

import InputComponent from "../InputComponent";

const InputTestComponent = () => {
  const [inputTest, setInputTest] = useState('');
  return (
    <div className="inputTestComponent">
      <InputComponent
        size="small"
        orientation="horizontal"
        label="Test"
        labelFor="test"
        type="text"
        placeholder="Test"
        getValue={setInputTest}
      />
      <div>{inputTest}</div>

      <InputComponent
        size="small"
        label="Test"
        labelFor="test"
        type="text"
      />

      <InputComponent
        orientation="horizontal"
        label="Test"
        labelFor="test"
        type="text"
        placeholder="Test"
      />

      <InputComponent
        size="small"
        type="text"
        placeholder="Test"
      />
    </div>
  );
};

export default InputTestComponent;
