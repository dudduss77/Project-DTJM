import "./SearchMainPageComponent.scss";
import { useFormik, Form } from "formik";
import * as Yup from "yup";

import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";

import NewInputComponent from "../newInputComponent/NewInputComponent";

import city from "./../../json/localizationPL.json";
import { globalContext } from "../../context/globalStore";
import { useContext, useState } from "react";
import { useHistory } from "react-router";

const SearchMainPageComponent = ({ name, imgUrl }) => {
  const { category } = useContext(globalContext);

  const mappCities = () => {
    let tempArr = [];
    city.forEach((item) => {
      tempArr.push(...item.cities.map((city) => city.text_simple));
    });

    return tempArr;
  };
  const [cities, setCities] = useState(mappCities());

  const mappCategory = () => category.map((item) => item.name);
  const [mappedCategory, setMappedCategory] = useState(mappCategory());

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      searchValue: "",
      searchCategory: "",
      searchLocation: "",
    },
    onSubmit: (values) => {
      console.log("Czy idzie submit");
      history.push("/search", {
        value: values.searchValue,
        category: values.searchCategory,
        location: values.searchLocation,
      });
    },
  });

  return (
    <div className="searchMainPageComponent">
      <NewInputComponent
        size="small"
        type="text"
        placeholder="Znajdź coś dla siebie"
        name="searchValue"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.searchValue}
      />

      <SelectComponent
        data={mappedCategory}
        formik={formik}
        name="searchCategory"
        placeholder="Kategoria"
      />

      <SelectComponent
        placeholder="Lokalizacja"
        data={cities}
        formik={formik}
        name="searchLocation"
      />

      <ButtonComponent
        name="Szukaj"
        size="small"
        click={() => formik.handleSubmit()}
      />
    </div>
  );
};

export default SearchMainPageComponent;
