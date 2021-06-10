import React, { useEffect, useContext } from "react";
import "../../globalStyle/globalStyle.scss";

import { useFormik } from "formik";
import * as Yup from "yup";
import * as AuthService from './../../services/authService.js';
import { NotificationManager } from 'react-notifications';

import ButtonComponent from "../buttonComponent/ButtonComponent";
import NewInputComponent from "../newInputComponent/NewInputComponent";
import { globalContext } from "../../context/globalStore";

const LoginComponent = () => {

  const { userData, setUserData } = useContext(globalContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Zły format email").required("Pole wymagane"),
      password: Yup.string().required("Pole wymagane"),
    }),
    onSubmit: ({ email, password }) => {  
      AuthService.authUser(
                          email, 
                          password,
                          () => {
                            setUserData({ type: "LOG-IN" })
                            NotificationManager.success('Zalogowano poprawnie')
                          
                          },
                          err => {NotificationManager.error(err)}
      );


    },
  });

  return (
    <>
      <NewInputComponent
        size="mid"
        type="text"
        placeholder="Email"
        name="email"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.email}
        message={
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : null
        }
      />
      <NewInputComponent
        size="mid"
        type="password"
        placeholder="Hasło"
        name="password"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.password}
        message={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : null
        }
      />
      <div className="emptyRwdDiv"></div>
      <ButtonComponent
        size="small"
        name="Zaloguj"
        click={() => formik.handleSubmit()}
      />
    </>
  );
};

export default LoginComponent;
