import React, {useState} from "react";

import ButtonComponent from "../buttonComponent/ButtonComponent";
import InputComponent from "../inputComponent/InputComponent";
import ErrorComponent from '../errorComponent/ErrorComponent'

const PassResetComponent = () => {
  const [emailPassReset, setEmailPassReset] = useState("")

  const submitPassReset = () => {
    console.log(emailPassReset);
    //API ITD.
  }
  return (
    <>
      <ErrorComponent errorMsg="test"/>
      <InputComponent
        size="mid"
        type="text"
        placeholder="Email"
        getValue={setEmailPassReset}
      />
      <ButtonComponent
        size="small"
        name="Resetuj"
        click={() => submitPassReset()}
      />
    </>
  );
};

export default PassResetComponent;
