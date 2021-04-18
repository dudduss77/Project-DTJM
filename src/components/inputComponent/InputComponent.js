import React from "react";
import "./InputComponent.scss";

const InputComponent = ({size="auto", orientation="vertical", label, htmlFor, type, placeholder, getValue}) => {

  const getInputValue = (event) => {
    event.preventDefault();
    getValue(event.target.value)
  }

  return (
    <div
      className={`inputComponent inputComponent--${size} inputComponent--${orientation}`}
    >
      {label && (
        <label className="inputComponent__label" htmlFor={htmlFor}>
          {label}
        </label>
      )}

      <input
        onChange={getInputValue}
        className="inputComponent__input"
        type={type}
        id={htmlFor}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
