import React, {useContext} from "react";
import "./AdvertismentHeaderComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams } from "react-router-dom";

import { globalContext } from "../../context/globalStore";
import {userActionType} from '../../context/reducers/userDataReducer'

import * as UserService from './../../services/userService';
import NotificationManager from "react-notifications/lib/NotificationManager";

export const AdvertismentHeaderComponent = ({
  header,
  localization,
  user,
  img_src,
  settingsClick,
}) => {
  const { testAd, userData, setUserData } = useContext(globalContext);
  let { id } = useParams();

  const onSucces = () => NotificationManager.success(" Dodano do obserwowanych");
  const onSuccesRem = () => NotificationManager.success("Nie obserwujesz już tego ogłoszenia");

const onError = err => {
    console.log("sukces");
    console.log(err);
}

  const addToObs = () => {
    let payload = {
      obsAdId: id
    }
    
    if(!userData.adObs.some(({obsAdId}) => obsAdId === id))
      UserService.addObsAd (payload, onSucces, onError)
    else
      UserService.remObsAd(payload, onSuccesRem, onError)
  }
  return (
    <div className="headerComponent2">
      <div className="headerComponent2__title">
        <h2 className="headerComponent2__header">{header}</h2>
        <h4 className="headerComponent2__localization"> {localization}</h4>
        <div>
          {user ? (
            <FontAwesomeIcon
              onClick={() => settingsClick()}
              className="headerComponent2__btn"
              icon="cog"
            />
          ) : (
            <FontAwesomeIcon 
              onClick={() => addToObs()} 
              className="headerComponent2__btn" 
              icon="heart" 
              style={userData.adObs && (!userData.adObs.some(({obsAdId}) => obsAdId === id)) ? {color: "grey"} : {color: "black"}}
            />
          )}
        </div>
      </div>

      <img src={img_src} className="headerComponent2__image" />
    </div>
  );
};
export default AdvertismentHeaderComponent;
