import React from 'react'
import './TestComponent.scss'

import InputTestComponent from '../inputTestComponent/InputTestComponent'
import ButtonTest from '../buttonComponent/buttonTest/ButtonTest'

const TestComponent = () => {
  return (
    <div className="testComponent">
      <InputTestComponent/>
      <ButtonTest/>
    </div>
  )
}

export default TestComponent
