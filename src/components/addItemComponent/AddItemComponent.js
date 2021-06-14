import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import SelectComponent from "../selectComponent/SelectComponent";

const AddItemComponent = ({ data, placeholder, getData }) => {
  const formik = useFormik({
    initialValues: {
      selectedItems: "",
    },
    onSubmit: (values, actions) => {
      console.log("submit category");
      getData((prevstate) => [...prevstate, values.selectedItems]);

      actions.resetForm({
        values: {
          selectedItems: "",
        },
      });
    },
  });

  const [mapItem, setMapItem] = useState([]);

  useEffect(() => {
    let temp = data.map((item) => item.name);
    console.log("temp", temp);
    setMapItem(temp);
  }, [data]);

  return (
    <SelectComponent
      size="mid"
      data={mapItem}
      formik={formik}
      name="selectedItems"
      placeholder={placeholder}
      submitFormOnItemClick={true}
    />
  );
};

export default AddItemComponent;
