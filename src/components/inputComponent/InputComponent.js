import React from "react";
import "./InputComponent.scss";

const InputComponent = ({
  size = "auto",
  orientation = "vertical",
  label,
  htmlFor,
  type,
  placeholder,
  getValue,
  isSubmitting
}) => {
  const getInputValue = (event) => {
    event.preventDefault();
    getValue(event.target.value);
    if(isSubmitting) isSubmitting();
  };

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
