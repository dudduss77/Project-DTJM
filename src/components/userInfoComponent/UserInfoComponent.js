import React from "react";
import "./UserInfoComponent.scss";


import UserDataComponent from "../userDataComponent/UserDataComponent";
import DescriptionComponent from "../descriptionComponent/DescriptionComponent";
import AvatarComponent from "../avatarComponent/AvatarComponent";

const UserInfoComponent = ({editMode, userData}) => {
  return (
    <div className="userInfoComponent">
      <UserDataComponent
        avatar={
          <AvatarComponent
            size="big"
            avatarSrc={userData.avatarSrc}
            avatarAlt={userData.avatarAlt}
          />
        }
        name={userData.name}
        surname={userData.surname}
        nick={userData.nick}
        email={userData.email}
        location={userData.location}
        editMode={editMode}
        id={userData.id}
      />
      <DescriptionComponent header="Opis" content={userData.description} />
    </div>
  );
};

export default UserInfoComponent;
