import React, { useEffect, useState, useContext } from "react";
import "./PreQuestionnaireView.scss";
import { useHistory } from "react-router-dom";

import UserFormComponent from "../../components/userFormComponent/UserFormComponent";
import AddLinks from "../../components/reusable/addLinks/AddLinks";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";

import TemplateOne from "../../templatesComponents/TemplateOne/TemplateOne";

import { globalContext } from "../../context/globalStore";
import { userActionType } from "../../context/reducers/userDataReducer";

const PreQuestionnaireView = () => {
  let history = useHistory();
  const { setUserData } = useContext(globalContext);
  const [newUserData, setNewUserData] = useState(null);
  const [linksData, setLinksData] = useState([]);

  const [buttonClick, setButtonClick] = useState(false);

  const deleteLinks = (id) => {
    console.log(id)
    setLinksData(linksData.filter((item) => item.path !== id));
  };

  const leftTop = (
    <>
      <h3>Dane Podstawowe</h3>
      <UserFormComponent getData={setNewUserData} informToGetData={buttonClick} />
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
  }, [buttonClick, newUserData, linksData]);

  const submit = () => {
    console.log("newuser", newUserData);
    console.log("links", linksData);
    if(newUserData) {
      let userData = {
        avatarSrc: null,
        avatarAlt: null,
        name: newUserData.name,
        surname: newUserData.surname,
        nick: newUserData.nick,
        email: newUserData.email,
        location: newUserData.location,
        description: newUserData.description,
        links: linksData,
      }

      setUserData({type: userActionType.editUser, payload: userData})

      history.push('/')
      setButtonClick(false);
    } else setButtonClick(false);
  }

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
