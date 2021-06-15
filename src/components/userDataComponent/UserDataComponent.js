import React, {useContext, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UserDataComponent.scss";
import "../../globalStyle/globalStyle.scss";

import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { globalContext } from "../../context/globalStore";
import {userActionType} from '../../context/reducers/userDataReducer'
import * as UserService from './../../services/userService'
import NotificationManager from "react-notifications/lib/NotificationManager";

const UserDataComponent = ({
  avatar,
  name,
  surname,
  nick,
  email,
  location,
  editMode = false,
  
}) => {
  const { setUserData, userData, setNewMessagePopUp } = useContext(globalContext);
  let { id } = useParams();
  let history = useHistory();

  const onSucces = () => NotificationManager.success(" Dodano do obserwowanych");
  const onSuccesRem = () => NotificationManager.success("Nie obserwujesz już tego użytkownika");

const onError = err => {
    console.log("sukces");
    console.log(err);
}

  const addToObs = () => {
    let payload = {
      obsUserId: id
    }

    if(!userData.peopleObs.some(({obsUserId}) => obsUserId === id))
      UserService.addObs(payload, onSucces, onError)
    else
      UserService.remObs(payload, onSuccesRem, onError)
  }

  return (
    <div className="userDataComponent">
      {avatar}
      <div className="userDataComponent__icons">
        {!editMode && (
          <>
            <FontAwesomeIcon 
              onClick={() => addToObs()} 
              className="darkIcon" 
              style={userData.peopleObs && (!userData.peopleObs.some(({obsUserId}) => obsUserId === id)) ? {color: "grey"} : {color: "black"}}
              icon="heart" 
            />

            <FontAwesomeIcon className="darkIcon" icon="comment" onClick={() => setNewMessagePopUp({ id, showPopup: true })} />
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
