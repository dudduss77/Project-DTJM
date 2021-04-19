import React, {useContext, useState} from "react";
import { globalContext } from "../../../context/globalStore";
import SelectComponent from "../SelectComponent";
import "./SelectTestComponent.scss";

import city from './../../../json/localizationPL.json'

const SelectTestComponent = () => {
  const {category} = useContext(globalContext);

  const mappCities = () => {
    let tempArr = [];
     city.forEach(item => {
      tempArr.push(...(item.cities.map(city => city.text_simple)))
     });

    return tempArr;
  }
  const [cities, setCities] = useState(mappCities());



  const mappCategory = () => category.map(item => item.name);
  const [mappedCategory, setMappedCategory] = useState(mappCategory());

  const [inputText, setInputText] = useState("");
  return (
    <div className="selectTestComponent">
      <SelectComponent data={cities} Change={setInputText} placeholder="Lokalizacja..."/>
      <SelectComponent data={mappedCategory} Change={setInputText} placeholder="Wybierz Kategorie"/>
      <SelectComponent size="auto" data={mappedCategory} Change={setInputText}/>
    </div>
  );
};

export default SelectTestComponent;
