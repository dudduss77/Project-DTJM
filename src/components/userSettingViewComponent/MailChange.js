import React, {useState} from "react";

import InputComponent from "../inputComponent/InputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const MailChange = () => {
  const [newMail, setNewMail] = useState("");

  const submitNewMail = () => {

  }

  return (
    <>
      <InputComponent
        size="mid"
        type="text"
        placeholder="Nowy adres email"
        getValue={setNewMail}
      />
      <ButtonComponent
        size="mid"
        name="Zmień"
        click={() => submitNewMail()}
      />
    </>
  );
};

export default MailChange;
