import React, {useContext, useState} from "react";
import { globalContext } from "../../../context/globalStore";
import SelectComponent from "../SelectComponent";
import "./SelectTestComponent.scss";


const SelectTestComponent = () => {
  const {category} = useContext(globalContext);

  const mappCategory = () => category.map(item => item.name);
  const [mappedCategory, setMappedCategory] = useState(mappCategory());

  const [inputText, setInputText] = useState("");
  return (
    <div className="selectTestComponent">
      <SelectComponent data={mappedCategory} Change={setInputText}/>
      <SelectComponent data={mappedCategory} Change={setInputText} placeholder="Wybierz Kategorie"/>
      <SelectComponent size="auto" data={mappedCategory} Change={setInputText}/>
    </div>
  );
};

export default SelectTestComponent;
