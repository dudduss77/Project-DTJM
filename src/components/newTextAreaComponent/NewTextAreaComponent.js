import React from "react";
import "./NewTextAreaComponent.scss";
const NewTextAreaComponent = ({
  size = "auto",
  placeholder,
  name,
  formikHandlChange,
  formikOnBlur,
  initialValue = "",
  message = ""
}) => {
  return (
    <div className={`newTextAreaComponent newTextAreaComponent--${size}`}>
    <textarea
      value={initialValue}
      onChange={formikHandlChange}
      onBlur={formikOnBlur}
      name={name}
      className="newTextAreaComponent__textarea"
      placeholder={placeholder}
    ></textarea>
    <span className="newTextAreaComponent__message">{message}</span>
    </div>
  );
};

export default NewTextAreaComponent;
