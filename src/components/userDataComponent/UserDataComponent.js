import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserDataComponent.scss";
import "../../globalStyle/globalStyle.scss";

const UserDataComponent = ({
  avatar,
  name,
  nick,
  email,
  location,
  editMode = false,
}) => {
  return (
    <div className="userDataComponent">
      {avatar}
      <div className="userDataComponent__icons">
        {!editMode && (
          <>
            <FontAwesomeIcon className="darkIcon" icon="heart" />
            <FontAwesomeIcon className="darkIcon" icon="comment" />
          </>
        )}

        {editMode && <FontAwesomeIcon className="darkIcon" icon="cog" />}
      </div>
      <div className="userDataComponent__content">
        <h5 className="userDataComponent__content__item">{name}</h5>
        <h5 className="userDataComponent__content__item">{nick}</h5>
        <h5 className="userDataComponent__content__item">{email}</h5>
        <h5 className="userDataComponent__content__item">{location}</h5>
      </div>
    </div>
  );
};

export default UserDataComponent;
