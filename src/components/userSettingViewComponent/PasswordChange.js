import React, {useState} from 'react'

import InputComponent from "../inputComponent/InputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const PasswordChange = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  const submitNewPass = () => {
    
  }

  return (
    <>
      <InputComponent
        size="mid"
        type="password"
        placeholder="Stare Hasło"
        getValue={setOldPass}
      />
      <InputComponent
        size="mid"
        type="password"
        placeholder="Nowe Hasło"
        getValue={setNewPass}
      />
      <InputComponent
        size="mid"
        type="password"
        placeholder="Powtórz hasło"
        getValue={setRepeatPass}
      />
      <ButtonComponent
        size="mid"
        name="Zmień"
        click={() => submitNewPass()}
      />
    </>
  )
}

export default PasswordChange
