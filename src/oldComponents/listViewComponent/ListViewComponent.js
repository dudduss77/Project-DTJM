import React from "react";
import "./ListViewComponent.scss";

const ListViewComponent = ({ header, list = [] }) => {
  return (
    <div className="listBox">
      <h3 className="listBox__header">{header}</h3>
      <ul>
        {list.map((each) => (
          <li key={each.id}>{each.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListViewComponent;
