import React, {useContext, useState} from "react";
import { globalContext } from "../../../context/globalStore";
import "./newSelectTestComponent.scss";
import city from './../../../json/localizationPL.json'
import NewSelectComponent from "../NewSelectComponent";
import { useFormik } from "formik";
import * as YUP from "yup";



const validationSchema = () => YUP.object().shape({
  testSelect: YUP.string().required("To pole jest wymagane")
})
const NewSelectTestComponent = () => {
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



  const Formik = useFormik({
    initialValues: {
      testSelect: "p",
    }, 
    validationSchema,
    onSubmit: values => alert(JSON.stringify(values))
  });


  return (
    <div className="selectTestComponent">


      <h1>NewSelectTestComponent</h1>
      <form onSubmit={Formik.handleSubmit}>
        <NewSelectComponent 
          data={cities} 
          placeholder="Lokalizacja..."
          formik={Formik}
          name="testSelect"
        />


        {Formik.errors.testSelect}
        <button type="submit">Submit</button>
      </form>



      <NewSelectComponent data={mappedCategory} Change={setInputText} placeholder="Wybierz Kategorie"/>
      <NewSelectComponent size="auto" data={mappedCategory} Change={setInputText}/>
    </div>
  );
};

export default NewSelectTestComponent;
