import React, { useEffect, useState, useContext } from "react";
import { globalContext } from "../../context/globalStore";
import { useFormik } from "formik";
import * as Yup from "yup";

import NewInputComponent from "../newInputComponent/NewInputComponent";
import NewTextAreaComponent from "../newTextAreaComponent/NewTextAreaComponent";
import SelectComponent from "../selectComponent/SelectComponent";

import city from "../../json/localizationPL.json";

const mappCities = () => {
  let tempArr = [];
  city.forEach((item) => {
    tempArr.push(...item.cities.map((city) => city.text_simple));
  });

  return tempArr;
};

const UserFormComponent = ({ getData, informToGetData, settings = false }) => {
  const { userData } = useContext(globalContext);
  const [cities, setCities] = useState(mappCities());

  const formik = useFormik({
    initialValues: {
      userName: "",
      userSurname: "",
      userNick: "",
      userLocation: "",
      userDesc: "",
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string().required("Pole wymagane"),
      userSurname: Yup.string().required("Pole wymagane"),
      userNick: Yup.string().required("Pole wymagane"),
      userLocation: Yup.string().required("Pole wymagane"),
      userDesc: Yup.string().required("Pole wymagane"),
    }),
    onSubmit: (values) => {
      console.log("Czy idzie submit");
      getData({
        name: values.userName,
        surname: values.userSurname,
        nick: values.userNick,
        location: values.userLocation,
        desc: values.userDesc,
      });
    },
  });

  useEffect(() => {
    if (settings) {
      formik.setValues({
        userName: userData.name,
        userSurname: userData.surname,
        userNick: userData.nick,
        userLocation: userData.location,
        userDesc: userData.description,
      });
    }
  }, []);

  useEffect(() => {
    if (informToGetData) formik.handleSubmit();
    // formik.handleSubmit();
  }, [informToGetData]);
  return (
    <>
      <NewInputComponent
        size="mid"
        type="text"
        placeholder="Imię"
        name="userName"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.userName}
        message={
          formik.touched.userName && formik.errors.userName
            ? formik.errors.userName
            : null
        }
      />
      <NewInputComponent
        size="mid"
        type="text"
        placeholder="Nazwisko"
        name="userSurname"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.userSurname}
        message={
          formik.touched.userSurname && formik.errors.userSurname
            ? formik.errors.userSurname
            : null
        }
      />
      <NewInputComponent
        size="mid"
        type="text"
        placeholder="Nazwa"
        name="userNick"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.userNick}
        message={
          formik.touched.userNick && formik.errors.userNick
            ? formik.errors.userNick
            : null
        }
      />

      <SelectComponent
        size="mid"
        data={cities}
        formik={formik}
        name="userLocation"
        placeholder="Lokalizacja..."
        message={
          formik.touched.userLocation && formik.errors.userLocation
            ? formik.errors.userLocation
            : null
        }
      />

      <NewTextAreaComponent
        size="mid"
        placeholder="Opis"
        name="userDesc"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.userDesc}
        message={
          formik.touched.userDesc && formik.errors.userDesc
            ? formik.errors.userDesc
            : null
        }
      />
    </>
  );
};

export default UserFormComponent;
