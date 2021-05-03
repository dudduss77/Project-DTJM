import React, { useState, useEffect, useContext } from "react";
import "./AdBlockWrapperComponent.scss";

import { useWindowSize } from "../../hook/windowSize";

import AdBlockComponent from "../adBlockComponent/AdBlockComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

import { globalContext } from "../../context/globalStore";

const renderBlock = (start, end, data) => {
  let temp = data.slice(start, end);

  return temp.map((item) => (
    <AdBlockComponent
      key={item.path}
      path={item.path}
      imgSrc={item.imgSrc}
      imgAlt={item.imgAlt}
      header={item.header}
      category={item.category}
    />
  ));
};

const AdBlockWrapperComponent = ({ header, data, userView = false }) => {
  const { testAd } = useContext(globalContext);
  const { width } = useWindowSize();

  const [numItems, setNumItems] = useState(8);
  const [colNumber, setColNumber] = useState(4);
  const [showMore, setShowMore] = useState(false);

  //Sprawdzanie rozdzielczości i generowanie odpowiedniej ilość bloków
  useEffect(() => {
    if (width > 1250) setNumItems(8);
    if (width < 1250) setNumItems(6);
    if (width < 950) setNumItems(4);
    if (width < 650) setNumItems(2);
  }, [width]);

  // Sprawdzanie jak dużo danych otrzymujemy i ustawianie odpowiedniej ilości kolumn
  useEffect(() => {
    if (data) {
      let dl = data.length;
      if (dl >= 4) setColNumber(4);
      if (dl === 3) setColNumber(3);
      if (dl === 2) setColNumber(2);
      if (dl === 1) setColNumber(1);
    }
  }, [data]);

  return (
    <div className="adBlockWrapperComponent">
      <h2 className="adBlockWrapperComponent__header">{header}</h2>
      <div
        className={`adBlockWrapperComponent__wrapper adBlockWrapperComponent__wrapper--col${colNumber}`}
      >
        {renderBlock(0, numItems, data ? data : testAd)}
      </div>

      {showMore && (
        <div
          className={`adBlockWrapperComponent__wrapper adBlockWrapperComponent__wrapper--col${colNumber}`}
        >
          {renderBlock(
            numItems,
            userView ? data.length : numItems * 2,
            data ? data : testAd
          )}
        </div>
      )}

      {(data ? data.length > numItems : testAd.length > numItems) && (
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
