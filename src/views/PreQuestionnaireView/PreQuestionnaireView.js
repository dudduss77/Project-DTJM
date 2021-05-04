import React, { useEffect, useState } from "react";
import "./PreQuestionnaireView.scss";

import UserFormComponent from "../../components/userFormComponent/UserFormComponent";

import TemplateOne from "../../templatesComponents/TemplateOne/TemplateOne";

const PreQuestionnaireView = () => {
  const [userData, setUserData] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  const preQuestionnaireUserInfo = (
    <>
      <h3>Dane Podstawowe</h3>
      <UserFormComponent getData={setUserData} informToGetData={buttonClick} />
    </>
  );

  useEffect(() => {
    console.log("Wysłane"); //Walidacja
  }, [buttonClick]);

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
