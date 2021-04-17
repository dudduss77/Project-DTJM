import React from "react";
import "./InputComponent.scss";

const InputComponent = (props) => {

  const getInputValue = (event) => {
    event.preventDefault();
    props.getValue(event.target.value)
  }

  return (
    <div
      className={`inputComponent inputComponent--${props.size} inputComponent--${props.orientation}`}
    >
      {props.label && (
        <label className="inputComponent__label" htmlFor={props.htmlFor}>
          {props.label}
        </label>
      )}

      <input
        onChange={getInputValue}
        className="inputComponent__input"
        type={props.type}
        id={props.htmlFor}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputComponent;
