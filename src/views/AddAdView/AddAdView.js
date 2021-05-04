import React, { useEffect, useState, useContext } from "react";
import moment from "moment";

import TemplateOne from "../../templatesComponents/TemplateOne/TemplateOne";
import AdFormComponent from "../../components/adFormComponent/AdFormComponent";

import { globalContext } from "../../context/globalStore";
import { userActionType } from "../../context/reducers/userDataReducer";

const AddAdView = () => {
  const { userData, setUserData } = useContext(globalContext);
  const [adData, setAdData] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  const adInfoComponent = (
    <AdFormComponent getData={setAdData} informToGetData={buttonClick} />
  );

  useEffect(() => {
    submitNewAd();
  }, [buttonClick, adData]);

  const submitNewAd = () => {
    if (adData) {
      let ad = {
        id: parseInt(userData.userId.toString() + moment.now().toString()),
        imgSrc:
          "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        imgAlt: "Kiedyś może będzie",
        header: adData.adName,
        category: "Jest lecz nie wiadomo gdzie",
        desc: adData.adDesc,
        location: adData.adLocation,
      };

      setUserData({ type: userActionType.addAd, payload: ad });
    }
  };

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
