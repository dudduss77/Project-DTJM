import React, { useState, useEffect, useContext } from "react";
import "./AdBlockWrapperComponent.scss";

import { useWindowSize } from "../../hook/windowSize";

import AdBlockComponent from "../adBlockComponent/AdBlockComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

import { globalContext } from "../../context/globalStore";

const renderBlock = (start, end, data = [], userView) => {
  let temp = data.slice(start, end);
  // console.log(temp);
  return temp.map((item) => {  return (
    <AdBlockComponent
      key={item.id}
      path={userView ? `/my-ad/${item.id}` : `/ad/${item.id}`}
      imgSrc={item.imgSrc}
      imgAlt={item.imgAlt}
      header={item.header}
      category={item.category != undefined && item.category.length !== 0 ? item.category[0].name : "Brak"}
    />
  )});
};

const AdBlockWrapperComponent = ({ header, data, userView = false, obsData = false }) => {
  const { testAd } = useContext(globalContext);
  const { width } = useWindowSize();

  const [selectedData, setSelectedData] = useState([]);
  const [numItems, setNumItems] = useState(8);
  const [colNumber, setColNumber] = useState(4);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (userView || obsData) setSelectedData(data);
    else setSelectedData(testAd);
  }, [data, testAd]);

  //Sprawdzanie rozdzielczości i generowanie odpowiedniej ilość bloków
  useEffect(() => {
    if (width > 1250) setNumItems(8);
    if (width < 1250) setNumItems(6);
    if (width < 950) setNumItems(4);
    if (width < 650) setNumItems(2);
  }, [width]);

  // Sprawdzanie jak dużo danych otrzymujemy i ustawianie odpowiedniej ilości kolumn
  useEffect(() => {
    if (selectedData) {
      let dl = selectedData.length;
      if (dl >= 4) setColNumber(4);
      if (dl === 3) setColNumber(3);
      if (dl === 2) setColNumber(2);
      if (dl === 1) setColNumber(1);
    }
  }, [selectedData]);

  return (
    <div className="adBlockWrapperComponent">
      <h2 className="adBlockWrapperComponent__header">{header}</h2>
      <div
        className={`adBlockWrapperComponent__wrapper adBlockWrapperComponent__wrapper--col${colNumber}`}
      >
        {renderBlock(0, numItems, selectedData, userView)}
      </div>

      {showMore && (
        <div
          className={`adBlockWrapperComponent__wrapper adBlockWrapperComponent__wrapper--col${colNumber}`}
        >
          {renderBlock(
            numItems,
            userView ? selectedData.length : numItems * 2,
            selectedData,
            userView
          )}
        </div>
      )}

      {(selectedData ? selectedData.length > numItems : numItems) && (
        <ButtonComponent
          size="small"
          name={!showMore ? "Pokaż więcej" : "Ukryj"}
          click={() => setShowMore(!showMore)}
        />
      )}
    </div>
  );
};

export default AdBlockWrapperComponent;
