import React, { useState } from "react";

import TemplateTwo from "../../templatesComponents/TemplateTwo/TemplateTwo";
import AdFormComponent from "../../components/adFormComponent/AdFormComponent";
import DeleteAd from '../../components/adSettingsViewComponent/DeleteAd'

const AdSettingsView = () => {
  const [adData, setAdData] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  const adFormComponent = (
    <>
      <h3>Podstawowe Dane</h3>
      <AdFormComponent
        getData={setAdData}
        informToGetData={buttonClick}
        settings={true}
      />
    </>
  );

  const right = (
    <>
      <h3>Usuwanie ogłoszenia</h3>
      <DeleteAd/>
    </>
  )

  return (
    <TemplateTwo
      header="Ustawienia użytkownika"
      leftTop={adFormComponent}
      leftBottom={<div className="tempAvatar"></div>}
      midOne={<div className="testCategory"></div>}
      midTwo={<div className="testCategory"></div>}
      right={right}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default AdSettingsView;
