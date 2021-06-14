import React, {useContext} from "react";
import "./AdvertismentHeaderComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams } from "react-router-dom";

import { globalContext } from "../../context/globalStore";
import {userActionType} from '../../context/reducers/userDataReducer'

export const AdvertismentHeaderComponent = ({
  header,
  localization,
  user,
  img_src,
  settingsClick,
}) => {
  const { testAd, userData, setUserData } = useContext(globalContext);
  let { id } = useParams();

  const addToObs = () => {
    let temp = {
      obsAdId: parseInt(id)
    }

    if(!userData.adObs.some(({obsAdId}) => obsAdId === parseInt(id)))
      setUserData({type: userActionType.addAdToObs, payload: temp})
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
            <FontAwesomeIcon onClick={() => addToObs()} className="btn" icon="heart" />
          )}
        </div>
      </div>

      <img src={img_src} className="headerComponent2__image" />
    </div>
  );
};
export default AdvertismentHeaderComponent;
