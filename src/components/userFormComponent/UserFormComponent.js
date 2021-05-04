import React, { useEffect, useState, useContext } from "react";

import InputComponent from "../inputComponent/InputComponent";
import TextAreaComponent from "../textAreaComponent/TextAreaComponent";
import SelectComponent from "../selectComponent/SelectComponent";

import {globalContext, golbalContext} from '../../context/globalStore'

import city from "../../json/localizationPL.json";

const mappCities = () => {
  let tempArr = [];
  city.forEach((item) => {
    tempArr.push(...item.cities.map((city) => city.text_simple));
  });

  return tempArr;
};

const UserFormComponent = ({ getData, informToGetData, settings = false }) => {
  const {userData} = useContext(globalContext)
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userNick, setUserNick] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [cities, setCities] = useState(mappCities());

  useEffect(() => {
    if(settings) {
      setUserName(userData.name.split(" "));
      setUserSurname(userData.name);
      setUserNick(userData.nick)
      setUserLocation(userData.location)
      setUserDesc(userData.description)
    }
  }, [])

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
        initialValue={userName}
      />
      <InputComponent
        size="mid"
        type="text"
        placeholder="Nazwisko"
        getValue={setUserSurname}
        initialValue={userSurname}
      />
      <InputComponent
        size="mid"
        type="text"
        placeholder="Pseudonim"
        getValue={setUserNick}
        initialValue={userNick}
      />
      <SelectComponent
        size="mid"
        data={cities}
        Change={setUserLocation}
        placeholder="Lokalizacja..."
      />

      <TextAreaComponent 
        size="mid" 
        placeholder="Opis" 
        getValue={setUserDesc} 
        initialValue={userDesc}
      />
    </>
  );
};

export default UserFormComponent;
