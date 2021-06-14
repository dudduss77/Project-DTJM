import React from "react";
import "./ItemDisplayComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemDisplayComponent = ({ data = [], delFun }) => {
  return (
    <div className="itemDisplayComponent">
      {data.length === 0 ? (
        <p className="itemDisplayComponent__empty">Brak</p>
      ) : (
        <div className="itemDisplayComponent__itemsWrapper">
          {data.map((item, index) => (
            <div
              className="itemDisplayComponent__itemsWrapper__item"
              key={item}
            >
              <div className="itemDisplayComponent__itemsWrapper__item__header">
                {item}
              </div>
              <div
                onClick={() => delFun(item)}
                className="itemDisplayComponent__itemsWrapper__item__remove"
              >
                <FontAwesomeIcon icon="times" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemDisplayComponent;
