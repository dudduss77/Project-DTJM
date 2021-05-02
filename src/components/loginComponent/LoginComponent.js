import React, { useEffect, useState } from "react";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import InputComponent from "../inputComponent/InputComponent";
import ErrorComponent from "../errorComponent/ErrorComponent";

import { useEmailValidation } from "../../hook/emailValidator";
import { useRequiredValidation } from "../../hook/requiredValidator";

const LoginComponent = () => {
  const [validateMessage, setValidateMessage] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [isEmailLoginSubmitting, setIsEmailLoginSubmitting] = useState(false);
  const [passwordLogin, setPasswordLogin] = useState("");
  const [isPasswordLoginSubmitting, setIsPasswordLoginSubmitting] = useState(
    false
  );

  const [emailValidMessage] = useEmailValidation({
    email: emailLogin,
    isSubmitting: isEmailLoginSubmitting,
  });

  const [requiredValidationMessage] = useRequiredValidation({
    value: passwordLogin,
    isSubmitting: isPasswordLoginSubmitting,
  });

  useEffect(() => {
    setValidateMessage(emailValidMessage || requiredValidationMessage);
  }, [emailValidMessage, requiredValidationMessage]);

  const submitLogin = () => {
    if (
      emailValidMessage === "" &&
      requiredValidationMessage === "" &&
      isEmailLoginSubmitting &&
      isPasswordLoginSubmitting
    ) {
      console.log(emailLogin, passwordLogin);
    } else {
      setValidateMessage("Sprawdź wszystkie pola");
    }

    //API ITD.
  };
  return (
    <>
      <ErrorComponent errorMsg={validateMessage} />
      <InputComponent
        size="mid"
        type="text"
        placeholder="Email"
        getValue={setEmailLogin}
        isSubmitting={() => setIsEmailLoginSubmitting(true)}
      />
      <InputComponent
        size="mid"
        type="password"
        placeholder="Hasło"
        getValue={setPasswordLogin}
        isSubmitting={() => setIsPasswordLoginSubmitting(true)}
      />
      <ButtonComponent
        size="small"
        name="Zaloguj"
        click={() => submitLogin()}
      />
    </>
  );
};

export default LoginComponent;
