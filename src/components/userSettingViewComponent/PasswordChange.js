import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import NewInputComponent from "../newInputComponent/NewInputComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const passRegex =
  /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

const PasswordChange = () => {
  const formik = useFormik({
    initialValues: {
      oldPass: "",
      newPass: "",
      repeatPass: "",
    },
    validationSchema: Yup.object().shape({
      oldPass: Yup.string().required("Pole wymagane"),
      newPass: Yup.string()
        .matches(passRegex, "Słabe hasło")
        .required("Pole wymagane"),
      repeatPass: Yup.string()
        .oneOf([Yup.ref("passwordRegister"), null], "Różne hasła")
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
        type="password"
        placeholder="Stare Hasło"
        name="oldPass"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.oldPass}
        message={
          formik.touched.oldPass && formik.errors.oldPass
            ? formik.errors.oldPass
            : null
        }
      />

      <NewInputComponent
        size="mid"
        type="password"
        placeholder="Nowe Hasło"
        name="newPass"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.newPass}
        message={
          formik.touched.newPass && formik.errors.newPass
            ? formik.errors.newPass
            : null
        }
      />

      <NewInputComponent
        size="mid"
        type="password"
        placeholder="Powtórz hasło"
        name="repeatPass"
        formikHandlChange={formik.handleChange}
        formikOnBlur={formik.handleBlur}
        initialValue={formik.values.repeatPass}
        message={
          formik.touched.repeatPass && formik.errors.repeatPass
            ? formik.errors.repeatPass
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

export default PasswordChange;
