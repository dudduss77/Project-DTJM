import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import NewInputComponent from "../newInputComponent/NewInputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

import * as UserService from './../../services/userService.js'
import { NotificationManager } from "react-notifications";

const MailChange = () => {

  const formik = useFormik({
    initialValues: {
      newMail: ""
    },
    validationSchema: Yup.object().shape({
      newMail: Yup.string().email("Zły format email").required("Pole wymagane")
      
    }),
    onSubmit: ({ newMail }) => {
      //API
      console.log("Czy idzie submit");
      UserService.changeEmail(newMail, () => {
        NotificationManager.success("Email został zmieniony");
      })
    },
  });

  return (
    <>
      <NewInputComponent
        size="mid"
        type="text"
        placeholder="Nowy adres email"
        name="newMail"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.newMail}
        message={
          formik.touched.newMail && formik.errors.newMail
            ? formik.errors.newMail
            : null
        }
      />
      <ButtonComponent
        size="mid"
        name="Zmień"
        click={() => formik.handleSubmit()}
      />
    </>
  );
};

export default MailChange;
