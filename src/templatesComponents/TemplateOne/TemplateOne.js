//Template for pre-questionnaire, addAd, adSettings
import React from "react";
import "./TemplateOne.scss";

import ButtonComponent from "../../components/buttonComponent/ButtonComponent";

const TemplateOne = ({ header, leftTop, leftBottom, midOne, midTwo, right, buttonClick }) => {
  return (
    <div className="templateOne">
      <h3 className="templateOne__header">{header}</h3>
      <div className="templateOne__leftTop">{leftTop}</div>
      <div className="templateOne__leftBottom">{leftBottom}</div>
      <div className="templateOne__midOne">{midOne}</div>
      <div className="templateOne__midTwo">{midTwo}</div>
      <div className="templateOne__right">{right}</div>
      <div className="templateOne__bottom">
        <ButtonComponent
          size="small"
          name="Zapisz"
          click={buttonClick}
        />
      </div>
    </div>
  );
};

export default TemplateOne;
