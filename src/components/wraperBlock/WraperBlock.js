import React from "react";
import SelectComponent from "../selectComponent/SelectComponent";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { globalContext } from "../../context/globalStore";
import ListComponentToWraper from "../listCompomentToWraper/ListComponentToWraper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WraperBlock = () => {
  const { category } = useContext(globalContext);
  const mappCategory = () => category.map((item) => item.name);
  const [mappedCategory, setMappedCategory] = useState(mappCategory());

  const [categoryText, setCategoryText] = useState("");
  const handlerCitiesChange = (val) => {
    //console.log(val);
    setCategoryText(val);
  };

  const [categoryTab, setCategoryTab] = useState([]);

  const handlerOnKeyDown = (e) => {
    if (e.code == "Enter" && categoryText != "" && !categoryTab.includes(categoryText)) {
      setCategoryTab((prev) => [...prev, categoryText]);
    }
  };
  useEffect(() => {
    setCategoryText("");
  }, [categoryTab]);

  //Delete
  const deleteElement = (key) => {
    setCategoryTab(categoryTab.filter((element) => element !== key));
    console.log(key);
  };
  return (
    <div>
      <SelectComponent
        data={mappedCategory}
        Change={handlerCitiesChange}
        placeholder="Wybierz kategorie"
        onKeyDown={handlerOnKeyDown}
      />
      <h3>Wybrane kategorie</h3>

      <div>
        <ListComponentToWraper
          elements={categoryTab}
          onDelete={deleteElement}
        />
      </div>
    </div>
  );
};
export default WraperBlock;
