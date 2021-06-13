import React, { useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import * as AuthService from './../../services/authService'

import ButtonComponent from "../buttonComponent/ButtonComponent";
import NewInputComponent from "../newInputComponent/NewInputComponent";
import { NotificationManager } from "react-notifications";

const registerSuccess = val => NotificationManager.success('Link do resetowania hasła został wysłany na podany adres email');
const registerErrorApi = err => NotificationManager.error(err);

const PassResetComponent = () => {
  const formik = useFormik({
    initialValues: {
      emailResetPass: "",
    },
    validationSchema: Yup.object().shape({
      emailResetPass: Yup.string()
        .email("Zły format email")
        .required("Pole wymagane"),
    }),
  onSubmit: async ({emailResetPass}) => {
        AuthService.sendPasswordResetEmail(emailResetPass, registerSuccess,() => registerErrorApi("Nieprawidłowy adres email"));

    },
  });

  return (
    <>
      <NewInputComponent
        size="mid"
        type="text"
        placeholder="Email"
        name="emailResetPass"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.emailResetPass}
        message={
          formik.touched.emailResetPass && formik.errors.emailResetPass
            ? formik.errors.emailResetPass
            : null
        }
      />
      <div className="emptyRwdDiv"></div>
      <ButtonComponent
        size="small"
        name="Resetuj"
        click={() => formik.handleSubmit()}
      />
    </>
  );
};

export default PassResetComponent;
