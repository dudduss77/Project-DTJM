import React from "react";
import "./AdBlockComponent.scss";

import {Link} from "react-router-dom"

const AdBlockComponent = ({path, imgSrc, imgAlt, header, category}) => {
  return (
    <Link to={path} className="adBlockComponent">
      <div className="adBlockComponent__image">
      <img
        className="adBlockComponent__image__img"
        src={imgSrc}
        alt={imgAlt}
      />
      </div>
      <div className="adBlockComponent__header">{header}</div>
      <div className="adBlockComponent__category">{category}</div>
    </Link>
  );
};

export default AdBlockComponent;
