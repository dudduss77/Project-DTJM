import {useContext} from 'react'
import './TestComponent.scss'

import InputTestComponent from '../inputComponent/inputTestComponent/InputTestComponent'
import ButtonTest from '../buttonComponent/buttonTest/ButtonTest'
import AdBlockTest from '../adBlockComponent/adBlockTest/AdBlockTest'
import { globalContext } from '../../context/globalStore'

const TestComponent = () => {

  const {category, setCategory } = useContext(globalContext);

  return (
    <div className="testComponent">
      <InputTestComponent/>
      <ButtonTest/>
      <AdBlockTest/>
    </div>
  )
}

export default TestComponent
