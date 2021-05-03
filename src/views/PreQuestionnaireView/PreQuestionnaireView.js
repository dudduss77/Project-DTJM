import React from "react";
import "./PreQuestionnaireView.scss";

import PreQuestionnaireUserInfo from '../../components/preQuestionnaireViewComponents/PreQuestionnaireUserInfo'
import ButtonComponent from '../../components/buttonComponent/ButtonComponent'

const PreQuestionnaireView = () => {
  return (
    <div className="preQuestionnaireView">
      <h3 className="preQuestionnaireView__header">Ankieta wstępna</h3>
      <div className="preQuestionnaireView__leftTop">
        <PreQuestionnaireUserInfo/>
      </div>
      <div className="preQuestionnaireView__leftBottom">
        avatar
        <div className="tempAvatar"></div>
      </div>
      <div className="preQuestionnaireView__mid">
        Kategorie
        <div className="testCategory "></div>
      </div>
      <div className="preQuestionnaireView__right">
      Skille
      <div className="testCategory "></div>
      </div>
      <div className="preQuestionnaireView__bottom">
      <ButtonComponent
        size="small"
        name="Zapisz"
        // click={() => submitLogin()}
      />
      </div>
    </div>
  );
};

export default PreQuestionnaireView;
