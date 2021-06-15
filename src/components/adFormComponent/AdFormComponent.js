import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { globalContext } from "../../context/globalStore";

import SelectComponent from "../selectComponent/SelectComponent";

import NewInputComponent from "../newInputComponent/NewInputComponent";
import NewTextAreaComponent from "../newTextAreaComponent/NewTextAreaComponent";

import city from "../../json/localizationPL.json";

const mappCities = () => {
  let tempArr = [];
  city.forEach((item) => {
    tempArr.push(...item.cities.map((city) => city.text_simple));
  });

  return tempArr;
};

const AdFormComponent = ({ getData, informToGetData, settings = false }) => {
  const { userData, testAd } = useContext(globalContext);
  let { id } = useParams();
  const [cities, setCities] = useState(mappCities());

  const formik = useFormik({
    initialValues: {
      adname: "",
      adLocation: "",
      adDesc: "",
    },
    validationSchema: Yup.object().shape({
      adname: Yup.string().required("Pole wymagane"),
      adLocation: Yup.string().required("Pole wymagane"),
      adDesc: Yup.string().required("Pole wymagane"),
    }),
    onSubmit: (values) => {
      console.log("Czy idzie submit");
      getData({
        id: id,
        adName: values.adname,
        adLocation: values.adLocation,
        adDesc: values.adDesc,
      });
    },
  });

  useEffect(() => {
    if (settings && userData && testAd) {
      const filteredAd = testAd.filter(item => item.userId === userData.userId)
      console.log(filteredAd);
      let [{ header, desc, location }] = filteredAd.filter(
        (item) => item.id === id
      );
      console.log(header);
      formik.setValues({ adname: header, adLocation: location, adDesc: desc });
    }
  }, []);

  useEffect(() => {
    if (informToGetData) formik.handleSubmit();
  }, [informToGetData, formik]);

  console.log(formik.values);

  return (
    <>
      <NewInputComponent
        size="mid"
        type="text"
        placeholder="Nazwa"
        name="adname"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.adname}
        message={
          formik.touched.adname && formik.errors.adname
            ? formik.errors.adname
            : null
        }
      />

      <SelectComponent
        size="mid"
        data={cities}
        formik={formik}
        name="adLocation"
        placeholder="Lokalizacja..."
        message={
          formik.touched.adLocation && formik.errors.adLocation
            ? formik.errors.adLocation
            : null
        }
      />

      <NewTextAreaComponent
        size="mid"
        placeholder="Opis"
        name="adDesc"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.adDesc}
        message={
          formik.touched.adDesc && formik.errors.adDesc
            ? formik.errors.adDesc
            : null
        }
      />
    </>
  );
};

export default AdFormComponent;
