import React, { useState } from "react";

import TemplateOne from "../../templatesComponents/TemplateOne/TemplateOne";
import AdInfoComponent from "../../components/addAdViewComponents/AdInfoComponent";

const AddAdView = () => {
  const [adData, setAdData] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  const adInfoComponent = (
    <AdInfoComponent getData={setAdData} informToGetData={buttonClick} />
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
