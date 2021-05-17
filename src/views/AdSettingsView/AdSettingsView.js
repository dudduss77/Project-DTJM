import React, { useState, useContext, useEffect } from "react";

import TemplateTwo from "../../templatesComponents/TemplateTwo/TemplateTwo";
import AdFormComponent from "../../components/adFormComponent/AdFormComponent";
import DeleteAd from "../../components/adSettingsViewComponent/DeleteAd";

import { globalContext } from "../../context/globalStore";
import { userActionType } from "../../context/reducers/userDataReducer";

const AdSettingsView = () => {
  const { userData, setUserData } = useContext(globalContext);
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
      <DeleteAd />
    </>
  );

  useEffect(() => {
    submitEditTask();
  }, [buttonClick, adData]);

  const submitEditTask = () => {
    console.log('edit', adData)
    if (adData) {
      let ad = {
        id: parseInt(adData.id),
        imgSrc:
          "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
        imgAlt: "Kiedyś może będzie",
        header: adData.adName,
        category: "Jest lecz nie wiadomo gdzie",
        desc: adData.adDesc,
        location: adData.adLocation,
      };

      setUserData({
        type: userActionType.editAd,
        payload: { id: parseInt(adData.id), editAd: ad },
      });
      setButtonClick(false);
      setAdData(null);
    } else setButtonClick(false);
  };

  return (
    <TemplateTwo
      header="Edycja ogłoszenia"
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
