import React, { useState } from "react";
import "./PopupComponent.scss";

import LoginComponent from "../loginComponent/LoginComponent";
import RegisterComponent from "../registerComponent/RegisterComponent";
import ChooseButton from "../chooseButton/ChooseButton";
import PassResetComponent from "../passResetComponent/PassResetComponent";

const PopupComponent = ({ close }) => {
  const [state, setState] = useState("login");

  const switchRender = (type) => {
    switch (type) {
      case "login":
        return <LoginComponent />;
      case "register":
        return <RegisterComponent />;
      case "remind-password":
        return <PassResetComponent />;
      default:
        return "404";
    }
  };

  return (
    <div onClick={() => close()} className="popupComponent">
      <div
        onClick={(e) => e.stopPropagation()}
        className="popupComponent__wrapper"
      >
        <div className="popupComponent__wrapper__menu">
          <ChooseButton
            click={() => setState("login")}
            name="Logowanie"
            checked={state === "login" ? true : false}
          />
          <ChooseButton
            click={() => setState("register")}
            name="Rejestracja"
            checked={state === "register" ? true : false}
          />
          <ChooseButton
            click={() => setState("remind-password")}
            name="Reset hasła"
            checked={state === "remind-password" ? true : false}
          />
        </div>

        <div className={"popupComponent__wrapper__content"}>
          {switchRender(state)}
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
