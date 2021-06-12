import React from "react";
import "./LinkDisplayComponent.scss";

import LinkComponent from "../linkComponent/LinkComponent";

const LinkDisplayComponent = ({ data = [], editMode, deleteFun }) => {
  return (
    <div className="linkDisplayComponent">
      {!editMode ? (
        <h3 className="linkDisplayComponent__header">Linki</h3>
      ) : null}
      <div className="linkDisplayComponent__content">
        {data.length === 0 ? (
          <p className="linkDisplayComponent__content__empty">Brak</p>
        ) : (
          data.map((item) => (
            <LinkComponent
              key={item.path}
              id={item.path}
              deleteFunc={deleteFun}
              editMode={editMode}
              linkPath={item.path}
              linkIcon={item.icon}
              linkTitle={item.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LinkDisplayComponent;
