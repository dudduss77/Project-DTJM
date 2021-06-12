import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { NotificationManager } from 'react-notifications';

import ButtonComponent from "../buttonComponent/ButtonComponent";
import NewInputComponent from "../newInputComponent/NewInputComponent";


import * as AuthService from './../../services/authService.js';

const passRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

const RegisterComponent = () => {

  const registerSuccess = val => NotificationManager.success('Rejestracja przebiegła pomyślnie');
  const registerErrorApi = err => NotificationManager.error(err);


  const formik = useFormik({
    initialValues: {
      emailRegister: "",
      passwordRegister: "",
      repPasswordRegister: "",
    },
    validationSchema: Yup.object().shape({
      emailRegister: Yup.string()
        .email("Zły format email")
        .required("Pole wymagane"),
      passwordRegister: Yup.string()
        .matches(passRegex, "Słabe hasło")
        .required("Pole wymagane"),
      repPasswordRegister: Yup.string()
        .oneOf([Yup.ref("passwordRegister"), null], "Różne hasła")
        .required("Pole wymagane"),
    }),
    onSubmit: ({ emailRegister, passwordRegister }) => {
      AuthService.createUser(emailRegister, passwordRegister, registerSuccess, registerErrorApi)
    },
  });

  return (
    <>
      <NewInputComponent
        size="mid"
        type="text"
        placeholder="Email"
        name="emailRegister"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.emailRegister}
        message={
          formik.touched.emailRegister && formik.errors.emailRegister
            ? formik.errors.emailRegister
            : null
        }
      />
      <NewInputComponent
        size="mid"
        type="password"
        placeholder="Hasło"
        name="passwordRegister"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.passwordRegister}
        message={
          formik.touched.passwordRegister && formik.errors.passwordRegister
            ? formik.errors.passwordRegister
            : null
        }
      />
      <NewInputComponent
        size="mid"
        type="password"
        placeholder="Powtórz hasło"
        name="repPasswordRegister"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.repPasswordRegister}
        message={
          formik.touched.repPasswordRegister &&
          formik.errors.repPasswordRegister
            ? formik.errors.repPasswordRegister
            : null
        }
      />
      <div className="emptyRwdDiv"></div>

      <ButtonComponent
        size="small"
        name="Zarejestruj"
        click={() => formik.handleSubmit()}
      />



    </>
  );
};

export default RegisterComponent;
