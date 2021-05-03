import React, { useState, useEffect, useContext } from "react";
import "./UserProfileView.scss";

import { useParams } from "react-router-dom";

import UserInfoComponent from "../../components/userInfoComponent/UserInfoComponent";
import AdBlockWrapperComponent from "../../components/adBlockWrapperComponent/AdBlockWrapperComponent";
import ObsPanelComponent from "../../components/obsPanelComponent/ObsPanelComponent";

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

  return (
    <div className="userProfileView">
      <UserInfoComponent
        userData={selectedUserData}
        editMode={!id ? true : false}
      />
      <div className="userProfileView__listWrapper">
        <div className="userProfileView__listWrapper__list">
          Skills
          <ul>
            {selectedUserData.skills
              ? selectedUserData.skills.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))
              : ""}
          </ul>
        </div>
        <div className="userProfileView__listWrapper__list">
          Kategorie
          <ul>
            {selectedUserData.category
              ? selectedUserData.category.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))
              : ""}
          </ul>
        </div>
        <div className="userProfileView__listWrapper__list">
          Linki
          <ul>
            {selectedUserData.links
              ? selectedUserData.links.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))
              : ""}
          </ul>
        </div>
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
