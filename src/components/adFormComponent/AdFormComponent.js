import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import InputComponent from "../inputComponent/InputComponent";
import TextAreaComponent from "../textAreaComponent/TextAreaComponent";
import SelectComponent from "../selectComponent/SelectComponent";

import { globalContext } from "../../context/globalStore";

import city from "../../json/localizationPL.json";

const mappCities = () => {
  let tempArr = [];
  city.forEach((item) => {
    tempArr.push(...item.cities.map((city) => city.text_simple));
  });

  return tempArr;
};

const AdFormComponent = ({ getData, informToGetData, settings = false }) => {
  const { userData } = useContext(globalContext);
  let { id } = useParams();
  const [adName, setAdName] = useState("");
  const [adLocation, setAdLocation] = useState("");
  const [adDesc, setAdDesc] = useState("");
  const [cities, setCities] = useState(mappCities());

  useEffect(() => {
    if(settings) {
      console.log(userData.ad)
      let [{header, desc, location}] = userData.ad.filter(item => item.id === parseInt(id));
      console.log(header)
      setAdName(header);
      setAdLocation(location);
      setAdDesc(desc);
    }
  }, [])

  useEffect(() => {
    if (informToGetData) {
      console.log(adName, adLocation, adDesc)
      getData({
        id,
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
        initialValue={adName}
      />
      <SelectComponent
        size="mid"
        data={cities}
        Change={setAdLocation}
        placeholder="Lokalizacja..."
      />
      <TextAreaComponent size="mid" placeholder="Opis" getValue={setAdDesc} initialValue={adDesc}/>
    </>
  );
};

export default AdFormComponent;
