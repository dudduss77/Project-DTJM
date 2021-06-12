import React, { useRef, useEffect } from "react";
import "./InputComponent.scss";

const InputComponent = ({
  size = "auto",
  orientation = "vertical",
  label,
  htmlFor,
  type,
  placeholder,
  getValue,
  isSubmitting,
  initialValue = "",
  onKeyDown, 
  reset = 0
}) => {
  const getInputValue = (event) => {
    event.preventDefault();
    getValue(event.target.value);
    if(isSubmitting) isSubmitting();
  };
  const input = useRef();

  useEffect(() => {
    input.current.value = "";
  }, [reset])
  
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
        defaultValue={initialValue}
        onChange={getInputValue}
        className="inputComponent__input"
        type={type}
        id={htmlFor}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        ref={input}
      />
    </div>
  );
};

export default InputComponent;
