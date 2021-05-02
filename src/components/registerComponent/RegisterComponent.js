import React, { useState, useEffect } from "react";

import ButtonComponent from "../buttonComponent/ButtonComponent";
import InputComponent from "../inputComponent/InputComponent";
import ErrorComponent from "../errorComponent/ErrorComponent";

import { useEmailValidation } from "../../hook/emailValidator";
import { usePasswordValidation } from "../../hook/passwordValidator";

const RegisterComponent = () => {
  const [validateMessage, setValidateMessage] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);

  const [passwordRegister, setPasswordRegister] = useState("");
  const [reapetPasswordRegister, setReapetPasswordRegister] = useState("");
  const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);
  const [isReapetPasswordSubmitting, setIsReapetPasswordSubmitting] = useState(
    false
  );

  const [emailValidMessage] = useEmailValidation({
    email: emailRegister,
    isSubmitting: isEmailSubmitting,
  });

  const [passwordValidationMessage] = usePasswordValidation({
    passOne: passwordRegister,
    passTwo: reapetPasswordRegister,
    isSubmitting: isPasswordSubmitting,
    isRepeatSubbmitting: isReapetPasswordSubmitting,
  });

  useEffect(() => {
    setValidateMessage(passwordValidationMessage || emailValidMessage);
  }, [passwordValidationMessage, emailValidMessage]);

  const submit = () => {
    if (
      emailValidMessage === "" &&
      passwordValidationMessage === "" &&
      isPasswordSubmitting &&
      isReapetPasswordSubmitting
    ) {
      console.log(emailRegister, passwordRegister, reapetPasswordRegister);
    } else setValidateMessage("Sprawdź wszystkie pola");
  };

  return (
    <>
      <ErrorComponent errorMsg={validateMessage} />
      <InputComponent
        size="mid"
        type="text"
        placeholder="Email"
        getValue={setEmailRegister}
        isSubmitting={() => setIsEmailSubmitting(true)}
      />
      <InputComponent
        size="mid"
        type="password"
        placeholder="Hasło"
        getValue={setPasswordRegister}
        isSubmitting={() => setIsPasswordSubmitting(true)}
      />
      <InputComponent
        size="mid"
        type="password"
        placeholder="Powtórz hasło"
        getValue={setReapetPasswordRegister}
        isSubmitting={() => setIsReapetPasswordSubmitting(true)}
      />
      <ButtonComponent size="small" name="Zarejestruj" click={() => submit()} />
    </>
  );
};

export default RegisterComponent;
