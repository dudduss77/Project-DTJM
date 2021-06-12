import React from "react";
import "./TemplateTwo.scss";

import ButtonComponent from "../../components/buttonComponent/ButtonComponent";

const TemplateTwo = ({
  header,
  leftTop,
  leftBottom,
  midOne,
  midTwo,
  midThree,
  right,
  buttonClick,
}) => {
  return (
    <div className="templateTwo">
      <h3 className="templateTwo__header">{header}</h3>
      <div className="templateTwo__content">
        <div className="templateTwo__content__left">
          <div className="templateTwo__content__left__top">{leftTop}</div>
          <div className="templateTwo__content__left__bottom">{leftBottom}</div>
        </div>

        <div className="templateTwo__content__midOne">{midOne}</div>
        <div className="templateTwo__content__midTwo">{midTwo}</div>
        <div className="templateTwo__content__midThree">{midThree}</div>
        <div className="templateTwo__content__right">{right}</div>
      </div>

      <div className="templateTwo__bottom">
        <ButtonComponent size="small" name="Zapisz" click={buttonClick} />
      </div>
    </div>
  );
};

export default TemplateTwo;
