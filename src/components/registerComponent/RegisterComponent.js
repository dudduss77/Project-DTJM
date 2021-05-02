import React, {useState} from 'react'

import ButtonComponent from '../buttonComponent/ButtonComponent'
import InputComponent from '../inputComponent/InputComponent'
import ErrorComponent from '../errorComponent/ErrorComponent'

const RegisterComponent = () => {
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [reapetPasswordRegister, setReapetPasswordRegister] = useState("");

  const submit = () => {
    console.log(emailRegister, passwordRegister, reapetPasswordRegister)
    //API CALL ITD.
  }

  return (
    <>
      <ErrorComponent errorMsg="test"/>
      <InputComponent
        size="mid"
        type="text"
        placeholder="Email"
        getValue={setEmailRegister}
      />
      <InputComponent
        size="mid"
        type="password"
        placeholder="Hasło"
        getValue={setPasswordRegister}
      />
      <InputComponent
        size="mid"
        type="password"
        placeholder="Powtórz hasło"
        getValue={setReapetPasswordRegister}
      />
      <ButtonComponent
        size="small"
        name="Zarejestruj"
        click={() => submit()}
      />
    </>
  )
}

export default RegisterComponent
