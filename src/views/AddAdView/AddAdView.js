import React, { useState } from "react";

import TemplateOne from "../../templatesComponents/TemplateOne/TemplateOne";
import AdFormComponent from '../../components/adFormComponent/AdFormComponent'

const AddAdView = () => {
  const [adData, setAdData] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  const adInfoComponent = (
    <AdFormComponent getData={setAdData} informToGetData={buttonClick} />
  );

  return (
    <TemplateOne
      header="Dodawanie ogłoszenia"
      leftTop={adInfoComponent}
      leftBottom={<div className="tempAvatar"></div>}
      mid={<div className="testCategory"></div>}
      right={<div className="testCategory"></div>}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default AddAdView;
