import {useContext, useEffect, useState} from "react";
import { globalContext } from "../../context/globalStore";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import CategoryTailComponent from "../categoryTailComponent/categoryTailComponent";
import "./CategoryChoiceComponent.scss";

const CategoryChoiceComponent = ({click}) => {

  const {category} = useContext(globalContext);
  const [limit, setLimit] = useState(true)

  const mappCategory = () => {
    let howMany = 0;

    if(window.innerWidth<280) howMany = 4;
    else if(window.innerWidth<421) howMany = 8;
    else howMany = 12;

    return category.slice(0,limit ? howMany : category.length).map(({name, icon, id}) => <CategoryTailComponent title={name} id={id} icon={icon} className="categoryChoiceComponent__item" />)

  }

  const handlerClick = () => setLimit(prev => !prev);


  const [categoryMapped, setcategoryMapped] = useState(mappCategory);

  useEffect(() => setcategoryMapped(mappCategory), [limit, category])

  return (
    <div className="categoryChoiceComponent" >
      <div className="categoryChoiceComponent__title">Kategorie</div>
      <div className="categoryChoiceComponent__wrapper" >
        {categoryMapped}
      </div>
      <div>
        <ButtonComponent name={limit ? "Pokaż wszystkie" : "Schowaj"} size="small" click={handlerClick} />
      </div>
      
    </div>
  );
};

export default CategoryChoiceComponent;
