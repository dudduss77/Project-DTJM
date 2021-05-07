import {useEffect, useState} from "react";
import "./SelectComponent.scss";

const SelectComponent = ({
  data = [], 
  Change, 
  size="small", 
  placeholder = "Select Option", 
  htmlFor, 
  className, 
  formik, 
  value = "", 
  name
}) => {




  const [visibility, setVisibility] = useState(false);
  const [inputTxt, setInputTxt] = useState(formik ? formik.values[name] : value);


  const handlerOnChange = (e) => {

    if(formik) formik.handleChange(e);
      setVisibility(true);
      setInputTxt(e.target.value)
    

  }


  const handlerOnClickInput = (e) => setVisibility(true);
  const handlerOnClickItem = (e) => {
    if(formik) formik.setValues({ [name]: e.target.innerText }); 

    setInputTxt(e.target.innerText); setVisibility(false); 

  }
  const handlerOnMouseLeave = (e) => setVisibility(false);

  const mappItems = (val = "") => {
    let regex = new RegExp(val, "i");
    return data.map(item => {
      if(regex.test(item))
        return (<div className="selectComponent__list__item" onClick={handlerOnClickItem} >{item}</div>)
    });
  }
  
  useEffect(() => {
    if(!formik) 
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
        onBlur={formik ? formik.handleBlur : ''}
        value={formik ? formik.values[name] : inputTxt}
        className="selectComponent__input"
        name={name}
        id={htmlFor}
        placeholder={placeholder}
        autoComplete="off"
      />

      {visibility && (<div className="selectComponent__list">
        {mappedItems}
      </div>)}
    </div>
  );
};

export default SelectComponent;
