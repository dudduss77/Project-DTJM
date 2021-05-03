import React, { useState, useEffect } from "react";

import ButtonComponent from "../buttonComponent/ButtonComponent";
import InputComponent from "../inputComponent/InputComponent";
import ErrorComponent from "../errorComponent/ErrorComponent";

import { useEmailValidation } from "../../hook/emailValidator";

const PassResetComponent = () => {
  const [validateMessage, setValidateMessage] = useState("");
  const [emailPassReset, setEmailPassReset] = useState("");
  const [isEmailResetSubmitting, setIsEmailResetSubmitting] = useState(false);

  const [emailValidMessage] = useEmailValidation({
    email: emailPassReset,
    isSubmitting: isEmailResetSubmitting,
  });

  useEffect(() => {
    setValidateMessage(emailValidMessage);
  }, [emailValidMessage]);

  const submitPassReset = () => {
    if (emailValidMessage === "" && isEmailResetSubmitting) {
      console.log(emailPassReset);
    } else setValidateMessage("Sprawdź wszystkie pola");

    //API ITD.
  };
  return (
    <>
      <ErrorComponent errorMsg={validateMessage} />
      <InputComponent
        size="mid"
        type="text"
        placeholder="Email"
        getValue={setEmailPassReset}
        isSubmitting={() => setIsEmailResetSubmitting(true)}
      />
      <div className="emptyRwdDiv"></div>
      <ButtonComponent
        size="small"
        name="Resetuj"
        click={() => submitPassReset()}
      />
    </>
  );
};

export default PassResetComponent;
