import React, {useState} from 'react'
import ButtonComponent from '../buttonComponent/ButtonComponent'
import InputComponent from '../inputComponent/InputComponent'
import ErrorComponent from '../errorComponent/ErrorComponent'

const LoginComponent = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const submitLogin = () => {
    console.log(emailLogin, passwordLogin);
    //API ITD.
  }
  return (
    <>
      <ErrorComponent errorMsg="test"/>
      <InputComponent
        size="mid"
        type="text"
        placeholder="Email"
        getValue={setEmailLogin}
      />
      <InputComponent
        size="mid"
        type="password"
        placeholder="Hasło"
        getValue={setPasswordLogin}
      />
      <ButtonComponent
        size="small"
        name="Zaloguj"
        click={() => submitLogin()}
      />
    </>
  )
}

export default LoginComponent
