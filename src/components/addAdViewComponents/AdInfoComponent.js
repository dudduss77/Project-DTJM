import React, { useState, useEffect } from "react";

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

const AdInfoComponent = ({ getData, informToGetData }) => {
  const [adName, setAdName] = useState("");
  const [adLocation, setAdLocation] = useState("");
  const [adDesc, setAdDesc] = useState("");
  const [cities, setCities] = useState(mappCities());

  useEffect(() => {
    if (informToGetData) {
      getData({
        adName,
        adLocation,
        adDesc,
      });
    }
  }, [informToGetData]);

  return (
    <>
      <InputComponent
        size="mid"
        type="text"
        placeholder="Nazwa"
        getValue={setAdName}
      />
      <SelectComponent
        size="mid"
        data={cities}
        Change={setAdLocation}
        placeholder="Lokalizacja..."
      />
      <TextAreaComponent size="mid" placeholder="Opis" getValue={setAdDesc} />
    </>
  );
};

export default AdInfoComponent;
