import React, { useState, useEffect } from "react";
import "./PopupComponent.scss";

import LoginComponent from "../loginComponent/LoginComponent";
import RegisterComponent from "../registerComponent/RegisterComponent";
import ChooseButton from "../chooseButton/ChooseButton";
import PassResetComponent from "../passResetComponent/PassResetComponent";

import { useWindowSize } from "../../hook/windowSize";

const PopupComponent = ({ close }) => {
  const windowSize = useWindowSize();
  const [mobile, setMobile] = useState(false);
  const [state, setState] = useState("login");

  useEffect(() => {
    console.log(windowSize.width);
    if (windowSize.width < 800) setMobile(true);
    else setMobile(false);
  }, [windowSize.width]);

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
          {mobile && (
            <ChooseButton
              click={() => close()}
              name="Zamknij"
              checked={false}
            />
          )}
        </div>

        <div className={"popupComponent__wrapper__content"}>
          {switchRender(state)}
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
