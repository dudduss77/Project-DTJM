import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListComponentToWraper.scss";

const ListComponentToWraper = ({ elements, onDelete }) => {
  const mapItems = (props) =>
    elements.map((element) => (
      <li className = "Lista__li" key={element}>
        {element}
        <FontAwesomeIcon
          className="times"
          icon="times"
          onClick={() => onDelete(element)}
        />
      </li>
    ));

  const [listItems, setListItems] = useState(mapItems());

  useEffect(() => {
    setListItems(mapItems());
  }, [elements]);

  return (
    <div className = "Lista">
      <ul className = "Lista__ul">{listItems}</ul>
    </div>
  );
};

export default ListComponentToWraper;
