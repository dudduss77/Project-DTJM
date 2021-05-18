import React from "react";
import "./LinkComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkComponent = ({id, linkPath, linkIcon, linkTitle, editMode, deleteFunc }) => {
  if (editMode)
    return (
      <div className="linkComponent">
        <div className="linkComponent__content">
          {linkIcon ? (
            <FontAwesomeIcon icon={["fab", linkIcon]} />
          ) : (
            <div className="linkComponent__content__shortcut">{linkTitle}</div>
          )}
        </div>

        <div onClick={() => deleteFunc(id)} className="linkComponent__trash">
          <FontAwesomeIcon icon="trash" />
        </div>
      </div>
    );
  else
    return (
      <div
        onClick={() => window.open(linkPath, "_blank", "noopener,noreferrer")}
        className="linkComponent"
      >
        {linkIcon ? (
          <FontAwesomeIcon icon={["fab", linkIcon]} />
        ) : (
          <div className="linkComponent__shortcut">{linkTitle}</div>
        )}
      </div>
    );
};

export default LinkComponent;
