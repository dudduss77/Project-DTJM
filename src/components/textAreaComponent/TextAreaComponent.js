import React from "react";
import "./TextAreaComponent.scss";
const TextAreaComponent = ({ size = "auto", placeholder, getValue }) => {

  const getTextareaValue = (event) => {
    event.preventDefault();
    getValue(event.target.value);
  };

  return (
    <textarea onChange={getTextareaValue}
      className={`textAreaComponent textAreaComponent--${size}`}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextAreaComponent;
