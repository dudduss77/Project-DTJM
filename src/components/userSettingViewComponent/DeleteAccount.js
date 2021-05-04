import React from "react";

import ButtonComponent from "../buttonComponent/ButtonComponent";

const DeleteAccount = () => {

  const submitDeleteAccount = () => {

  }

  return (
    <ButtonComponent
      size="mid"
      bgColor="red"
      name="Usuń konto"
      click={() => submitDeleteAccount()}
    />
  );
};

export default DeleteAccount;
