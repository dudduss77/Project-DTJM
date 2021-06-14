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
  const { userData, allUser, testAd } = useContext(globalContext);
  const [selectedUserData, setSelectedUserData] = useState({});

  useEffect(() => {
    if (id === undefined || id === userData.userId) setSelectedUserData(userData);
    else {
      //API
      setSelectedUserData(allUser.find(item => item.userId === id))
    }
  }, [id, userData]);

  useEffect(() => {
    console.log("selectedUserData");
    console.log(selectedUserData);
    console.log(testAd);
  })
  console.log("wybrany", selectedUserData);


  return selectedUserData ? (
    <div className="userProfileView">
      <UserInfoComponent
        userData={selectedUserData}
        editMode={!id || id === userData.userId ? true : false}
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
        header={!id ? "Moje ogłoszenia" : "Ogłoszenia"}
        data={testAd.filter(item => item.userId === selectedUserData.userId)}
      />
    </div>
  ) : "Wczytywanie";
};

export default UserProfileView;
