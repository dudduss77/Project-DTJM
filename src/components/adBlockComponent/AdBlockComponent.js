import React from "react";
import "./AdBlockComponent.scss";

const AdBlockComponent = ({imgSrc, imgAlt, header, category}) => {
  return (
    <div className="adBlockComponent">
      <div className="adBlockComponent__image">
      <img
        className="adBlockComponent__image__img"
        src={imgSrc}
        alt={imgAlt}
      />
      </div>
      <div className="adBlockComponent__header">{header}</div>
      <div className="adBlockComponent__category">{category}</div>
    </div>
  );
};

export default AdBlockComponent;
