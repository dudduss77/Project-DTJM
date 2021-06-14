import React, { useState, useEffect, useContext } from "react";
import "./SearchView.scss";
import ReactPaginate from "react-paginate";

import { useFormik, Form } from "formik";
import { globalContext } from "../../context/globalStore";

import city from "./../../json/localizationPL.json";
import NewInputComponent from "../../components/newInputComponent/NewInputComponent";
import SelectComponent from "../../components/selectComponent/SelectComponent";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import SearchItemBlock from "../../components/searchItemBlock/SearchItemBlock";

const SearchView = ({ location }) => {
  const { testAd, category } = useContext(globalContext);

  const mappCities = () => {
    let tempArr = [];
    city.forEach((item) => {
      tempArr.push(...item.cities.map((city) => city.text_simple));
    });

    return tempArr;
  };
  const [cities, setCities] = useState(mappCities());

  const mappCategory = () => category.map((item) => item.name);
  const [mappedCategory, setMappedCategory] = useState(mappCategory());

  const formik = useFormik({
    initialValues: {
      searchValue: "",
      searchCategory: "",
      searchLocation: "",
    },
  });

  const [selectedData, setSelectedData] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  console.log(location);

  useEffect(() => {
    if (location.state) {
      formik.setValues({
        searchValue: location.state.value,
        searchCategory: location.state.category,
        searchLocation: location.state.location,
      });
    }
  }, [location.state]);

  useEffect(() => {
    if (
      formik.values.searchValue === "" &&
      formik.values.searchCategory === "" &&
      formik.values.searchLocation === ""
    ) {
      setSelectedData(testAd);
    } else {
      setSelectedData(
        testAd
          .filter((item) => {
            if (formik.values.searchLocation) {
              console.log("loc");
              return item.location === formik.values.searchLocation;
            } else return item;
          })
          .filter((item) => {
            if (formik.values.searchCategory) {
              console.log("cat");
              return item.category.some(
                ({ name }) => name === formik.values.searchCategory
              );
            } else return item;
          })
          .filter((item) => {
            if (formik.values.searchValue) {
              let regex = new RegExp(formik.values.searchValue, "i");
              console.log("cal");
              return regex.test(item.header);
            } else return item;
          })
      );
    }
  }, [formik.values]);

  const renderSearchItem = () => {
    return selectedData.map((item, index) => {
      if (index >= pageNum * 4 && index < pageNum * 4 + 4) {
        return (
          <SearchItemBlock
            id={item.id}
            key={item.id}
            header={item.header}
            location={item.location}
            desc={item.desc}
            image={item.imgSrc}
          />
        );
      }
    });
  };

  const paginateClick = (data) => {
    setPageNum(data.selected);
  };

  return (
    <div className="searchView">
      <div className="searchView__top">
        <NewInputComponent
          size="small"
          type="text"
          placeholder="Znajdź coś dla siebie"
          name="searchValue"
          formikHandlChange={formik.handleChange}
          formikOnBlur={formik.handleBlur}
          initialValue={formik.values.searchValue}
        />

        <SelectComponent
          data={mappedCategory}
          formik={formik}
          name="searchCategory"
          placeholder="Kategoria"
        />

        <SelectComponent
          placeholder="Lokalizacja"
          data={cities}
          formik={formik}
          name="searchLocation"
        />
      </div>
      <div className="searchView__content">
        {/* <SearchItemBlock/> */}
        {renderSearchItem()}
      </div>
      <div className="searchView__bottom">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={
            selectedData.length / 4 === 0 ? 1 : selectedData.length / 4
          }
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={paginateClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default SearchView;
