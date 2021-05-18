import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import links from "../../../json/links.json";

import NewInputComponent from "../../newInputComponent/NewInputComponent";
import SelectComponent from "../../selectComponent/SelectComponent";
import ButtonComponent from "../../buttonComponent/ButtonComponent";

const urlRegex =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

const AddLinks = ({ getData, existData }) => {
  const formik = useFormik({
    initialValues: {
      selectedLink: "",
      linkPath: "",
      linkTitle: "",
    },
    validationSchema: Yup.object().shape({
      selectedLink: Yup.string().required("Pole wymagane"),
      linkPath: Yup.string()
        .required("Pole wymagane")
        .matches(urlRegex, "Zły format linku"),
      linkTitle: Yup.string().when("selectedLink", {
        is: "Inny",
        then: Yup.string().required("Pole wymagane").max(7, "Max 7 znaków"),
      }),
    }),
    onSubmit: (values, actions) => {
      if (existData.find((item) => item.path === values.linkPath)) {
        actions.setErrors({ linkPath: "Ten link już dodałeś" });
      } else {
        const { icon } = links.find(
          (item) => item.name === values.selectedLink
        );

        const startUrlRegex = /^(http:\/\/|https:\/\/)/;
        let urlPath = startUrlRegex.test(values.linkPath)
          ? values.linkPath
          : "http://" + values.linkPath;


        getData((prevState) => [
          ...prevState,
          {
            name: values.selectedLink,
            path: urlPath,
            icon: icon ? icon : null,
            title: values.linkTitle ? values.linkTitle : null,
          },
        ]);
        actions.resetForm({
          values: {
            selectedLink: "",
            linkPath: "",
            linkTitle: "",
          },
        });
      }
    },
  });

  const renderForm = () => {
    if (formik.values.selectedLink === "Inny") {
      return (
        <>
          <NewInputComponent
            size="mid"
            type="text"
            placeholder="Krótka nazwa, skrót"
            name="linkTitle"
            formikHandlChange={formik.handleChange}
            formikOnBlur={formik.handleBlur}
            initialValue={formik.values.linkTitle}
            message={
              formik.touched.linkTitle && formik.errors.linkTitle
                ? formik.errors.linkTitle
                : null
            }
          />
          <NewInputComponent
            size="mid"
            type="text"
            placeholder="Podaj link"
            name="linkPath"
            formikHandlChange={formik.handleChange}
            formikOnBlur={formik.handleBlur}
            initialValue={formik.values.linkPath}
            message={
              formik.touched.linkPath && formik.errors.linkPath
                ? formik.errors.linkPath
                : null
            }
          />
          <ButtonComponent
            size="small"
            name="Dodaj"
            click={() => formik.handleSubmit()}
          />
        </>
      );
    } else if (formik.values.selectedLink !== "") {
      return (
        <>
          <NewInputComponent
            size="mid"
            type="text"
            placeholder="Podaj link"
            name="linkPath"
            formikHandlChange={formik.handleChange}
            formikOnBlur={formik.handleBlur}
            initialValue={formik.values.linkPath}
            message={
              formik.touched.linkPath && formik.errors.linkPath
                ? formik.errors.linkPath
                : null
            }
          />
          <ButtonComponent
            size="small"
            name="Dodaj"
            click={() => formik.handleSubmit()}
          />
        </>
      );
    } else return;
  };

  return (
    <>
      <SelectComponent
        size="mid"
        data={links.map((link) => link.name)}
        formik={formik}
        name="selectedLink"
        placeholder="Wybierz link"
        message={
          formik.touched.selectedLink && formik.errors.selectedLink
            ? formik.errors.selectedLink
            : null
        }
      />
      {renderForm()}
    </>
  );
};

export default AddLinks;
