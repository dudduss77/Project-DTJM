import React from 'react'
import './TestComponent.scss'

import InputTestComponent from '../inputTestComponent/InputTestComponent'
import ButtonTest from '../buttonComponent/buttonTest/ButtonTest'
import AdBlockTest from '../adBlockComponent/adBlockTest/AdBlockTest'

const TestComponent = () => {
  return (
    <div className="testComponent">
      <InputTestComponent/>
      <ButtonTest/>
      <AdBlockTest/>
    </div>
  )
}

export default TestComponent
