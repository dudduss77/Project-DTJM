import React, { useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import ButtonComponent from "../buttonComponent/ButtonComponent";
import NewInputComponent from "../newInputComponent/NewInputComponent";


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
