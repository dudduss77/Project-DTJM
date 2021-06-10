import React from "react";
import "./ButtonComponent.scss";

const ButtonComponent = ({ click, size = "auto", name, bgColor = 'default' }) => {
  return (
    <button
      onClick={click}
      className={`buttonComponent buttonComponent--${size} buttonComponent--${bgColor}`}
      type="button"
    >
      {name}
    </button>
  );
};

export default ButtonComponent;
