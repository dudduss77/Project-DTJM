import React from "react";
import "./DescriptionComponent.scss";

const DescriptionComponent = ({ header, content }) => {
  return (
    <div className="descriptionComponent">
      <h3 className="descriptionComponent__header">{header}</h3>
      <div className="descriptionComponent__content">{content}</div>
    </div>
  );
};

export default DescriptionComponent;
