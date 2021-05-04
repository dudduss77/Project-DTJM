import React, { useState } from "react";

import TemplateTwo from "../../templatesComponents/TemplateTwo/TemplateTwo";
import UserFormComponent from "../../components/userFormComponent/UserFormComponent";
import DeleteAccount from "../../components/userSettingViewComponent/DeleteAccount";
import MailChange from "../../components/userSettingViewComponent/MailChange";
import PasswordChange from "../../components/userSettingViewComponent/PasswordChange";

const UserSettingsView = () => {
  const [userData, setUserData] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  const userInfoSettings = (
    <>
    <h3>Podstawowe dane</h3>
    <UserFormComponent
      getData={setUserData}
      informToGetData={buttonClick}
      settings={true}
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
      midOne={<div className="testCategory"></div>}
      midTwo={<div className="testCategory"></div>}
      right={right}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default UserSettingsView;
