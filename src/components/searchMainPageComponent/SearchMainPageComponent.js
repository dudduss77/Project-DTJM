import './SearchMainPageComponent.scss'

import ButtonComponent from '../../components/buttonComponent/ButtonComponent'
import InputComponent from '../../components/inputComponent/InputComponent'
import SelectComponent from '../../components/selectComponent/SelectComponent'


import city from './../../json/localizationPL.json'
import { globalContext } from '../../context/globalStore'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router'

const SearchMainPageComponent = ({name, imgUrl}) => {

  const {category} = useContext(globalContext);

  const mappCities = () => {
    let tempArr = [];
     city.forEach(item => {
      tempArr.push(...(item.cities.map(city => city.text_simple)))
     });

    return tempArr;
  }
  const [cities, setCities] = useState(mappCities());



  const mappCategory = () => category.map(item => item.name);
  const [mappedCategory, setMappedCategory] = useState(mappCategory());

  const [inputText, setInputText] = useState("");
  const [categoryText, setCategoryText] = useState("");
  const [citiesText, setCitiesText] = useState("");

  const history = useHistory();

  const handlerClick = () => history.push("/search", {value: inputText, category: categoryText, location: citiesText});
  const handlerInputChange = (val) => setInputText(val);
  const handlerCitiesChange = (val) => setCategoryText(val);
  const handlerCategoryChange = (val) => setCitiesText(val);


  return (
    <div className="searchMainPageComponent">

      <InputComponent 
        size="small" 
        placeholder="Znajdź coś dla siebie"
        size="small"
        getValue={handlerInputChange}
      />

      <SelectComponent 
        data={mappedCategory} 
        Change={handlerCitiesChange} 
        placeholder="Kategoria"
      />

      <SelectComponent 
        placeholder="Lokalizacja"
        data={cities}
        Change={handlerCategoryChange}
      />

      <ButtonComponent
        name="Szukaj"
        size="small"
        click={handlerClick}
      />
    </div>
  )
}

export default SearchMainPageComponent
