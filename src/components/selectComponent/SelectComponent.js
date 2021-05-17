import { getDefaultNormalizer } from "@testing-library/dom";
import {useEffect, useState} from "react";
import "./SelectComponent.scss";

const SelectComponent = ({data = [], Change, size="small", placeholder, htmlFor, className, onKeyDown}) => {



  const [visibility, setVisibility] = useState(false);
  const [inputTxt, setInputTxt] = useState("");


  const handlerOnChange = (e) => {
    setVisibility(true);
    setInputTxt(e.target.value)
  }
  const handlerOnClickInput = (e) => setVisibility(true);
  const handlerOnClickItem = (e) => {setInputTxt(e.target.innerText); setVisibility(false); }
  const handlerOnMouseLeave = (e) => setVisibility(false);

  const mappItems = (val = "") => {
    let regex = new RegExp(val, "i");
    return data.map(item => {
      if(regex.test(item))
        return (<div className="selectComponent__list__item" onClick={handlerOnClickItem} >{item}</div>)
    });
  }
  
  useEffect(() => {
    Change(inputTxt);
    setMappedItems(mappItems(inputTxt)) 
  
  }, [inputTxt])


  const [mappedItems, setMappedItems] = useState(mappItems());

  return (
    <div
      className={`selectComponent selectComponent--${size} ${className}`}
      onMouseLeave={handlerOnMouseLeave}
    >

      <input
        onChange={handlerOnChange}
        onClick={handlerOnClickInput}
        value={inputTxt}
        className="selectComponent__input"
        id={htmlFor}
        placeholder={placeholder}
        onKeyDown = {onKeyDown}
      />

      {visibility && (<div className="selectComponent__list">
        {mappedItems}
      </div>)}
    </div>
  );
};

export default SelectComponent;
