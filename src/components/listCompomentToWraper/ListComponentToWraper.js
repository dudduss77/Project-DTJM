import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ElementOfListToWraper from "../elementOfListToWraper/ElementOfListToWraper";

const ListComponentToWraper = ({ elements, onDelete }) => {
  const mapItems = (props) =>
    elements.map((element) => (
      <li key={element}>
        {element}
        <FontAwesomeIcon
          className="trash"
          icon="trash"
          onClick={() => onDelete(element)}
        />
      </li>
    ));

  const [listItems, setListItems] = useState(mapItems());

  useEffect(() => {
    setListItems(mapItems());
  }, [elements]);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default ListComponentToWraper;
