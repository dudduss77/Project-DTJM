import React, {useEffect, useState} from "react";
import "./PreQuestionnaireView.scss";

import PreQuestionnaireUserInfo from '../../components/preQuestionnaireViewComponents/PreQuestionnaireUserInfo'

import TemplateOne from '../../templatesComponents/TemplateOne/TemplateOne'

const PreQuestionnaireView = () => {
  const [userData, setUserData] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  const preQuestionnaireUserInfo = <PreQuestionnaireUserInfo
    getData={setUserData}
    informToGetData={buttonClick}
  />;

  useEffect(() => {
    console.log("Wysłane") //Walidacja
  }, [buttonClick])

  return (
    <TemplateOne 
      header="Ankieta wstępna"
      leftTop={preQuestionnaireUserInfo}
      leftBottom={<div className="tempAvatar"></div>}
      mid={<div className="testCategory"></div>}
      right={<div className="testCategory"></div>}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default PreQuestionnaireView;