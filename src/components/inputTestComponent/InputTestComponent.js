import React, {useState} from "react";
import "./InputTestComponent.scss";

import InputComponent from "../inputComponent/InputComponent";

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
        orientation="vertical"
        label="Test"
        labelFor="test"
        type="text"
        // placeholder="Test"
      />

      <InputComponent
        size="auto"
        orientation="horizontal"
        label="Test"
        labelFor="test"
        type="text"
        placeholder="Test"
      />

      <InputComponent
        size="small"
        orientation="vertical"
        labelFor="test"
        type="text"
        placeholder="Test"
      />
    </div>
  );
};

export default InputTestComponent;
