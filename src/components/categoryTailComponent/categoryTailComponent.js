import "./categoryTailComponent.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";

const CategoryTailComponent = ({ title, id = null, icon, className = "" }) => {
  let history = useHistory();

  const handlerOnClick = () =>
    history.push("/search", {
      category: title,
    });
  return (
    <div
      onClick={handlerOnClick}
      className={`categoryTailComponent ${className}`}
    >
      <div className="categoryTailComponent__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="categoryTailComponent__title">{title}</div>
    </div>
  );
};

export default CategoryTailComponent;
