import React, { useState, useContext, useEffect } from "react";

import TemplateTwo from "../../templatesComponents/TemplateTwo/TemplateTwo";
import UserFormComponent from "../../components/userFormComponent/UserFormComponent";
import DeleteAccount from "../../components/userSettingViewComponent/DeleteAccount";
import MailChange from "../../components/userSettingViewComponent/MailChange";
import PasswordChange from "../../components/userSettingViewComponent/PasswordChange";

import AddLinks from "../../components/reusable/addLinks/AddLinks";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";
import ImageWrapperComponent from "../../components/imageWrapperComponent/ImageWrapperComponent";
import AddItemComponent from "../../components/addItemComponent/AddItemComponent";
import ItemDisplayComponent from "../../components/itemDisplayComponent/ItemDisplayComponent";

import * as UserService from "./../../services/userService"

import { globalContext } from "../../context/globalStore";
import { userActionType } from "../../context/reducers/userDataReducer";
import { NotificationManager } from "react-notifications";

const UserSettingsView = () => {
  const { userData, setUserData, category, skills } = useContext(globalContext);
  const [newUserData, setNewUserData] = useState(null);
  console.log(userData)
  const [userImage, setUserImage] = useState(userData.avatarSrc);
  const [categoryData, setCategoryData] = useState(
    userData.category.map((item) => item.name)
  );
  const [skillsData, setSkillsData] = useState(
    userData.skills.map((item) => item.name)
  );
  const [linksData, setLinksData] = useState(userData.links);
  const [buttonClick, setButtonClick] = useState(false);

  const deleteLinks = (id) => {
    console.log(id);
    setLinksData(linksData.filter((item) => item.path !== id));
  };

  const deleteCategory = (id) => {
    setCategoryData(categoryData.filter((item) => item !== id));
  };

  const deleteSkills = (id) => {
    setSkillsData(skillsData.filter((item) => item !== id));
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    submitUserSettings();
  }, [buttonClick, newUserData]);

  const submitUserSettings = () => {
    if (newUserData) {
      let categoryObjectArray =  categoryData.map((item, index) => ({id: (category.find(it => item == it.name)).id }));
      let skillObjectArray =  skillsData.map((item, index) => ({id: (skills.find(it => item == it.name)).id }));
      let toUpdate = {
        avatarSrc: userImage,
        avatarAlt: "UserAvatar",
        name: newUserData.name,
        surname: newUserData.surname,
        nick: newUserData.nick,
        location: newUserData.location,
        description: newUserData.desc,
        links: linksData,
        category: categoryObjectArray,
        skills: skillObjectArray,
      };
      console.log("klikam");
      console.log(toUpdate);
      console.log("koncze klikac")
      UserService.update(toUpdate, () => {
        NotificationManager.success("Zapisano zmiany");
      })
      // setUserData({ type: userActionType.editUser, payload: userData });
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

  const leftBottom = (
    <>
      <ImageWrapperComponent
        setData={userImage}
        informToGetData={buttonClick}
        getData={setUserImage}
      />
    </>
  );

  const midOne = (
    <>
      <h3>Kategorie</h3>
      <AddItemComponent
        data={category.filter((item) => !categoryData.includes(item.name))}
        placeholder="Wybierz kategorie"
        getData={setCategoryData}
      />
      <h4>Wybrane Kategorie</h4>
      <ItemDisplayComponent
        data={categoryData}
        delFun={(val) => deleteCategory(val)}
      />
    </>
  );

  const midTwo = (
    <>
      <h3>Skills</h3>
      <AddItemComponent
        data={skills.filter((item) => !skillsData.includes(item.name))}
        placeholder="Wybierz skille"
        getData={setSkillsData}
      />
      <h4>Wybrane skille</h4>
      <ItemDisplayComponent
        data={skillsData}
        delFun={(val) => deleteSkills(val)}
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
      leftBottom={leftBottom}
      midOne={midOne}
      midTwo={midTwo}
      midThree={midThree}
      right={right}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default UserSettingsView;
