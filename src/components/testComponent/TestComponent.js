import {useContext} from 'react'
import './TestComponent.scss'

import InputTestComponent from '../inputComponent/inputTestComponent/InputTestComponent'
import ButtonTest from '../buttonComponent/buttonTest/ButtonTest'
import AdBlockTest from '../adBlockComponent/adBlockTest/AdBlockTest'
import { globalContext } from '../../context/globalStore'
import SelectComponent from '../selectComponent/SelectComponent'
import SelectTestComponent from '../selectComponent/selectTestComponent/SelectTestComponent'
import CategoryTailComponent from '../categoryTailComponent/categoryTailComponent'
import CategoryTailTestComponent from '../categoryTailComponent/categoryTailTestComponent/categoryTailTestComponent'
import CategoryChoiceTestComponent from '../categoryChoiceComponent/categoryChoiceTestComponent/CategoryChoiceTestComponent'
import HeaderTest from '../headerComponent/headerTest/HeaderTest'
import ObsPanelComponent from '../obsPanelComponent/ObsPanelComponent'
import ObsPanelTest from '../obsPanelComponent/obsPanelTest/ObsPanelTest'
import PersonItemTest from '../personItemComponent/personItemTest/PersonItemTest'
import UserInfoComponent from '../userInfoComponent/UserInfoTest/UserInfoTest'
import PopupTestComponent from '../popupComponent/PopupTestComponent/PopupTestComponent'

const TestComponent = () => {

  const {category, setCategory } = useContext(globalContext);

  return (
    <div className="testComponent">
      <InputTestComponent/>
      <ButtonTest/>
      <AdBlockTest/>
      <SelectTestComponent/>
      <CategoryTailTestComponent />
      <CategoryChoiceTestComponent/>
      <HeaderTest/>
      <ObsPanelTest/>
      <PersonItemTest/>
      <UserInfoComponent/>
      <PopupTestComponent/>
    </div>
  )
}

export default TestComponent
