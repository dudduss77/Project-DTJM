import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import ButtonComponent from "../buttonComponent/ButtonComponent";

import { globalContext } from "../../context/globalStore";
import { userActionType } from "../../context/reducers/userDataReducer";

const DeleteAd = () => {
  let { id } = useParams();
  const { setUserData } = useContext(globalContext);

  const submitDeleteAd = () => {
    setUserData({
      type: userActionType.deleteAd,
      payload: { id: parseInt(id) },
    });
  };

  return (
    <ButtonComponent
      size="mid"
      bgColor="red"
      name="Usuń ogłoszenie"
      click={() => submitDeleteAd()}
    />
  );
};

export default DeleteAd;
