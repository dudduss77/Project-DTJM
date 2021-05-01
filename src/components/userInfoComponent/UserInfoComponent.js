import React, { useContext } from "react";
import "./UserInfoComponent.scss";

import { globalContext } from "../../context/globalStore";

import UserDataComponent from "../userDataComponent/UserDataComponent";
import DescriptionComponent from "../descriptionComponent/DescriptionComponent";
import AvatarComponent from "../avatarComponent/AvatarComponent";

const UserInfoComponent = () => {
  const { userData } = useContext(globalContext);
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
        nick={userData.nick}
        email={userData.email}
        location={userData.location}
      />
      <DescriptionComponent header="Opis" content={userData.description} />
    </div>
  );
};

export default UserInfoComponent;
