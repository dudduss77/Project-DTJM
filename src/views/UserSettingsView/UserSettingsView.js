import React, { useState, useContext, useEffect } from "react";

import TemplateTwo from "../../templatesComponents/TemplateTwo/TemplateTwo";
import UserFormComponent from "../../components/userFormComponent/UserFormComponent";
import DeleteAccount from "../../components/userSettingViewComponent/DeleteAccount";
import MailChange from "../../components/userSettingViewComponent/MailChange";
import PasswordChange from "../../components/userSettingViewComponent/PasswordChange";

import AddLinks from "../../components/reusable/addLinks/AddLinks";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";

import { globalContext } from "../../context/globalStore";
import { userActionType } from "../../context/reducers/userDataReducer";

const UserSettingsView = () => {
  const { userData, setUserData } = useContext(globalContext);
  const [newUserData, setNewUserData] = useState(null);
  const [linksData, setLinksData] = useState(userData.links);
  const [buttonClick, setButtonClick] = useState(false);

  const deleteLinks = (id) => {
    console.log(id);
    setLinksData(linksData.filter((item) => item.path !== id));
  };

  useEffect(() => {
    submitUserSettings();
  }, [buttonClick, newUserData, linksData]);

  const submitUserSettings = () => {
    if (newUserData && linksData) {
      if(newUserData === userData)
      setButtonClick(false);
    } else setButtonClick(false);
  };

  const userInfoSettings = (
    <>
      <h3>Podstawowe dane</h3>
      <UserFormComponent
        getData={setNewUserData}
        informToGetData={buttonClick}
        settings={true}
      />
    </>
  );

  const midThree = (
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

  const right = (
    <>
      <h3>Zmiana Hasła</h3>
      <PasswordChange />
      <h3>Zmiana adresu email</h3>
      <MailChange />
      <h3>Usuwanie konta</h3>
      <DeleteAccount />
    </>
  );

  return (
    <TemplateTwo
      header="Ustawienia użytkownika"
      leftTop={userInfoSettings}
      leftBottom={<div className="tempAvatar"></div>}
      midOne={midThree}
      midTwo={midThree}
      midThree={midThree}
      right={right}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default UserSettingsView;
