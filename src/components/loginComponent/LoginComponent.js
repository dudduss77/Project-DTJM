import React, { useEffect } from "react";
import "../../globalStyle/globalStyle.scss";

import { useFormik } from "formik";
import * as Yup from "yup";

import ButtonComponent from "../buttonComponent/ButtonComponent";
import NewInputComponent from "../newInputComponent/NewInputComponent";

const LoginComponent = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Zły format email").required("Pole wymagane"),
      password: Yup.string().required("Pole wymagane"),
    }),
    onSubmit: (values) => {
      console.log("Czy idzie submit");
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
