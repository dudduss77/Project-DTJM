import React, { useState, useEffect, useContext } from "react";
import "./UserProfileView.scss";

import { useParams } from "react-router-dom";

import UserInfoComponent from "../../components/userInfoComponent/UserInfoComponent";
import AdBlockWrapperComponent from "../../components/adBlockWrapperComponent/AdBlockWrapperComponent";
import ObsPanelComponent from "../../components/obsPanelComponent/ObsPanelComponent";
import ListViewComponent from "../../components/listViewComponent/ListViewComponent";
import LinkDisplayComponent from "../../components/reusable/linkDisplayComponent/LinkDisplayComponent";

import { globalContext } from "../../context/globalStore";

const UserProfileView = () => {
  let { id } = useParams();
  const { userData } = useContext(globalContext);
  const [selectedUserData, setSelectedUserData] = useState({});

  useEffect(() => {
    if (id === undefined) setSelectedUserData(userData);
    else
      setSelectedUserData({
        avatarSrc: "/assets/profil.png",
        avatarAlt: "Avatar",
        name: "Testowy z API",
        nick: "API",
        email: "api@api.pl",
        location: "Firebase",
        description:
          "Tutaj trzeba pobrać dane z bazy odnośnie konkretnego użytkownika",
        ad: [],
        peopleObs: [],
        skills: [],
        category: [],
        links: [],
      }); //Call api to get user data witch id params
  }, [id, userData]);

  console.log("wybrany", selectedUserData);

  return (
    <div className="userProfileView">
      <UserInfoComponent
        userData={selectedUserData}
        editMode={!id ? true : false}
      />
      <div className="userProfileView__listWrapper">
        <ListViewComponent header="Skills" list={selectedUserData.skills} />

        <ListViewComponent
          header="Kategorie"
          list={selectedUserData.category}
        />

        <LinkDisplayComponent data={selectedUserData.links}/>

        <ObsPanelComponent data={selectedUserData.peopleObs} />
      </div>
      <AdBlockWrapperComponent
        userView={true}
        header="Moje ogłoszenia"
        data={selectedUserData.ad}
      />
    </div>
  );
};

export default UserProfileView;
