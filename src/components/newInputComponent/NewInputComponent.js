import React from "react";
import "./NewInputComponent.scss";

const NewInputComponent = ({
  size = "auto",
  orientation = "vertical",
  label,
  htmlFor,
  type,
  name,
  placeholder,
  formikHandlChange,
  formikOnBlur,
  initialValue = "",
  message = ""
}) => {
  return (
    <div
      className={`newInputComponent newInputComponent--${size} newInputComponent--${orientation}`}
    >
      {label && (
        <label className="newInputComponent__label" htmlFor={htmlFor}>
          {label}
        </label>
      )}

      <input
        value={initialValue}
        onChange={formikHandlChange}
        onBlur={formikOnBlur}
        className="newInputComponent__input"
        type={type}
        name={name}
        id={htmlFor}
        placeholder={placeholder}
      />
      <span className="newInputComponent__message">{message}</span>
    </div>
  );
};

export default NewInputComponent;
