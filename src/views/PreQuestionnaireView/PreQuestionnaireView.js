import React, { useEffect, useState, useContext } from "react";
import "./PreQuestionnaireView.scss";
import { useHistory } from "react-router-dom";

import UserFormComponent from "../../components/userFormComponent/UserFormComponent";
import AddLinks from "../../components/reusable/addLinks/AddLinks";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";

import ImageWrapperComponent from "../../components/imageWrapperComponent/ImageWrapperComponent";
import WraperBlock from "../../components/wraperBlock/WraperBlock";
import AddItemComponent from "../../components/addItemComponent/AddItemComponent";
import ItemDisplayComponent from "../../components/itemDisplayComponent/ItemDisplayComponent";

import TemplateOne from "../../templatesComponents/TemplateOne/TemplateOne";

import { globalContext } from "../../context/globalStore";
import { userActionType } from "../../context/reducers/userDataReducer";

const PreQuestionnaireView = () => {
  let history = useHistory();
  const { setUserData, category, skills } = useContext(globalContext);
  const [newUserData, setNewUserData] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [linksData, setLinksData] = useState([]);

  const [buttonClick, setButtonClick] = useState(false);

  const deleteLinks = (id) => {
    setLinksData(linksData.filter((item) => item.path !== id));
  };

  const deleteCategory = (id) => {
    setCategoryData(categoryData.filter((item) => item !== id));
  };

  const deleteSkills = (id) => {
    setSkillsData(skillsData.filter((item) => item !== id));
  };

  const leftTop = (
    <>
      <h3>Dane Podstawowe</h3>
      <UserFormComponent
        getData={setNewUserData}
        informToGetData={buttonClick}
      />
    </>
  );

  const leftBottom = (
    <>
      <ImageWrapperComponent 
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
    submit();
  }, [buttonClick, newUserData]);

  const submit = () => {
    console.log("newuser", newUserData);
    console.log("links", linksData);
    console.log("category", categoryData);
    console.log("skills", skillsData);
    console.log("image", userImage);
    
    if (newUserData) {
      let categoryObjectArray = categoryData.map((item, index) => ({id: index, name: item}));
      let skillObjectArray = skillsData.map((item, index) => ({id: index, name: item}));
      let userData = {
        avatarSrc: userImage,
        avatarAlt: "UserAvatar",
        name: newUserData.name,
        surname: newUserData.surname,
        nick: newUserData.nick,
        location: newUserData.location,
        description: newUserData.desc,
        links: linksData,
        category: categoryObjectArray,
        skills: skillObjectArray
      };

      setUserData({type: userActionType.editUser, payload: userData})

      // history.push('/')
      setButtonClick(false);
    } else setButtonClick(false);
  };

  return (
    <TemplateOne
      header="Ankieta wstępna"
      leftTop={leftTop}
      leftBottom={leftBottom}
      midOne={midOne}
      midTwo={midTwo}
      right={right}
      buttonClick={() => setButtonClick(true)}
    />
  );
};

export default PreQuestionnaireView;
