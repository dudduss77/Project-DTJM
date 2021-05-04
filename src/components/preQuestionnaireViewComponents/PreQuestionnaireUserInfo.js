import React, { useEffect, useState } from "react";

import InputComponent from "../inputComponent/InputComponent";
import TextAreaComponent from "../textAreaComponent/TextAreaComponent";
import SelectComponent from "../selectComponent/SelectComponent";

import city from "../../json/localizationPL.json";

const mappCities = () => {
  let tempArr = [];
  city.forEach((item) => {
    tempArr.push(...item.cities.map((city) => city.text_simple));
  });

  return tempArr;
};

const PreQuestionnaireUserInfo = ({ getData, informToGetData }) => {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userNick, setUserNick] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [cities, setCities] = useState(mappCities());

  useEffect(() => {
    if (informToGetData) {
      getData({
        userName,
        userSurname,
        userNick,
        userLocation,
        userDesc,
      });
    }
  }, [informToGetData]);
  return (
    <>
      <InputComponent
        size="mid"
        type="text"
        placeholder="Imię"
        getValue={setUserName}
      />
      <InputComponent
        size="mid"
        type="text"
        placeholder="Nazwisko"
        getValue={setUserSurname}
      />
      <InputComponent
        size="mid"
        type="text"
        placeholder="Pseudonim"
        getValue={setUserNick}
      />
      <SelectComponent
        size="mid"
        data={cities}
        Change={setUserLocation}
        placeholder="Lokalizacja..."
      />

      <TextAreaComponent size="mid" placeholder="Opis" getValue={setUserDesc} />
    </>
  );
};

export default PreQuestionnaireUserInfo;
