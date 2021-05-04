//Template for pre-questionnaire, addAd, adSettings
import React from "react";
import "./TemplateOne.scss";

import ButtonComponent from "../../components/buttonComponent/ButtonComponent";

const TemplateOne = ({ header, leftTop, leftBottom, mid, right, buttonClick }) => {
  return (
    <div className="templateOne">
      <h3 className="preQuestionnaireView__header">{header}</h3>
      <div className="preQuestionnaireView__leftTop">{leftTop}</div>
      <div className="preQuestionnaireView__leftBottom">{leftBottom}</div>
      <div className="preQuestionnaireView__mid">{mid}</div>
      <div className="preQuestionnaireView__right">{right}</div>
      <div className="preQuestionnaireView__bottom">
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
