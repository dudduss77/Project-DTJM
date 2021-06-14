import React, {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserDataComponent.scss";
import "../../globalStyle/globalStyle.scss";

import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { globalContext } from "../../context/globalStore";
import {userActionType} from '../../context/reducers/userDataReducer'

const UserDataComponent = ({
  avatar,
  name,
  surname,
  nick,
  email,
  location,
  editMode = false,
}) => {
  const { setUserData, userData } = useContext(globalContext);
  let { id } = useParams();
  let history = useHistory();

  const addToObs = () => {
    let temp = {
      obsUserId: parseInt(id)
    }

    if(!userData.peopleObs.some(({obsUserId}) => obsUserId === parseInt(id)))
      setUserData({type: userActionType.addToObs, payload: temp})
  }

  return (
    <div className="userDataComponent">
      {avatar}
      <div className="userDataComponent__icons">
        {!editMode && (
          <>
            <FontAwesomeIcon onClick={() => addToObs()} className="darkIcon" icon="heart" />
            <FontAwesomeIcon className="darkIcon" icon="comment" />
          </>
        )}

        {editMode && (
          <FontAwesomeIcon
            onClick={() => history.push("user-settings")}
            className="darkIcon"
            icon="cog"
          />
        )}
      </div>
      <div className="userDataComponent__content">
        <h5 className="userDataComponent__content__item">{name + " " + surname}</h5>
        <h5 className="userDataComponent__content__item">{nick}</h5>
        <h5 className="userDataComponent__content__item">{email}</h5>
        <h5 className="userDataComponent__content__item">{location}</h5>
      </div>
    </div>
  );
};

export default UserDataComponent;
