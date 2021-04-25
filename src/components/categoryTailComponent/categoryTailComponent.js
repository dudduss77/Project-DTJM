import "./categoryTailComponent.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router";



const CategoryTailComponent = ({title, id = null, icon, className=""}) => {
  let history = useHistory();

  const handlerOnClick = () => history.push("/categories/" + id);
  return (
    <div className={`categoryTailComponent ${className}`} >
        <div 
        className="categoryTailComponent__icon" 
        onClick={handlerOnClick}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="categoryTailComponent__title">
          {title}
        </div>
    </div>
  );
};

export default CategoryTailComponent;
