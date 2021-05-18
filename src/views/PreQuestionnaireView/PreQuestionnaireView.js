import React, { useEffect, useState } from "react";
import "./PreQuestionnaireView.scss";

import UserFormComponent from "../../components/userFormComponent/UserFormComponent";
import AddLinks from "../../components/reusable/addLinks/AddLinks";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";

import TemplateOne from "../../templatesComponents/TemplateOne/TemplateOne";

const PreQuestionnaireView = () => {
  const [userData, setUserData] = useState(null);
  const [linksData, setLinksData] = useState([
    // {
    //   path: "https://github.com/dudduss77",
    //   icon: "github",
    // },
    // {
    //   path: "https://github.com/dudduss77",
    //   icon: "linkedin",
    // },
  ]);
  const [buttonClick, setButtonClick] = useState(false);

  const deleteLinks = (id) => {
    console.log(id)
    setLinksData(linksData.filter((item) => item.path !== id));
  };

  const leftTop = (
    <>
      <h3>Dane Podstawowe</h3>
      <UserFormComponent getData={setUserData} informToGetData={buttonClick} />
    </>
  );

  const right = (
    <>
      <h3>Linki</h3>
      <AddLinks getData={setLinksData} existData={linksData} />
      <h4>Wybrane linki</h4>
      <LinkDisplayComponent
        data={linksData}
        editMode={true}
        deleteFun={(val) => deleteLinks(val)}
      />
    </>
  );

  useEffect(() => {
    console.log("Wysłane"); //Walidacja
  }, [buttonClick]);

  return (
    <TemplateOne
      header="Ankieta wstępna"
      leftTop={leftTop}
      leftBottom={<div className="tempAvatar"></div>}
      midOne={<div className="testCategory"></div>}
      midTwo={<div className="testCategory"></div>}
      right={right}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default PreQuestionnaireView;
