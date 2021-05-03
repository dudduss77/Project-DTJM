import React, { useState, useEffect, useContext } from "react";
import "./AdBlockWrapperComponent.scss";

import { useWindowSize } from "../../hook/windowSize";

import AdBlockComponent from "../adBlockComponent/AdBlockComponent";
import ButtonComponent from "../buttonComponent/ButtonComponent";

import {globalContext} from '../../context/globalStore'

const renderBlock = (start, end, data) => {

  let temp = data.slice(start, end);

  return temp.map(item => <AdBlockComponent
    key={item.path}
    path={item.path}
    imgSrc={item.imgSrc}
    imgAlt={item.imgAlt}
    header={item.header}
    category={item.category}
  />)
};

const AdBlockWrapperComponent = ({header}) => {
  const {testAd} = useContext(globalContext)

  const { width } = useWindowSize();
  const [numItems, setNumItems] = useState(8);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (width > 1250) setNumItems(8);
    if (width < 1250) setNumItems(6);
    if (width < 950) setNumItems(4);
    if (width < 650) setNumItems(2);
  }, [width]);

  return (
    <div className="adBlockWrapperComponent">
      <h2 className="adBlockWrapperComponent__header">
        {header}
      </h2>
      <div className="adBlockWrapperComponent__wrapper">
        {renderBlock(0, numItems, testAd)}
      </div>

      {showMore && (<div className="adBlockWrapperComponent__wrapper">
        {renderBlock(numItems, numItems*2, testAd)}
      </div>)}

      <ButtonComponent
        size="small"
        name="Test1"
        click={() => setShowMore(!showMore)}
      />
    </div>
  );
};

export default AdBlockWrapperComponent;
