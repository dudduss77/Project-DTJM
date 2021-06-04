import React, {useContext, useState} from "react";
import { globalContext } from "../../../context/globalStore";
import "./SelectTestComponent.scss";
import city from './../../../json/localizationPL.json'
import SelectComponent from "../SelectComponent";
import { useFormik } from "formik";
import * as YUP from "yup";



const validationSchema = () => YUP.object().shape({
  testSelect: YUP.string().required("To pole jest wymagane").min(3, "To pole musi zawierać minimum 3")
})
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
  const [rst, setRst] = useState(true);



  const Formik = useFormik({
    initialValues: {
      testSelect: "p",
    }, 
    validationSchema,
    onSubmit: values => alert(JSON.stringify(values))
  });


  return (
    <div className="selectTestComponent">


      <h1>SelectTestComponent with formik</h1>
      <form onSubmit={Formik.handleSubmit}>
        <SelectComponent 
          data={cities} 
          placeholder="Lokalizacja..."
          formik={Formik}
          name="testSelect"
        />


        {Formik.errors.testSelect}
        <button type="submit">Submit</button>
      </form>

      <h1>SelectTestComponent without formik</h1>
      <form 
        onSubmit={e => { alert(inputText); e.preventDefault();}}
      >
      <SelectComponent 
        data={mappedCategory} 
        Change={setInputText} 
        placeholder="Wybierz Kategorie"
        reset={rst}
       />


        <button type="submit">Submit without formik</button>
        <input type="button" onClick={() => setRst(prev => !prev)} value="reset"></input>
      </form>






    </div>
  );
};

export default SelectTestComponent;
