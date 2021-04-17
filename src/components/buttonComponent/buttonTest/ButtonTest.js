import React, {useState} from 'react'
import './ButtonTest.scss'

import ButtonComponent from '../ButtonComponent'

const ButtonTest = () => {
  const [testButton, setTestButton] = useState(false);
  return (
    <div className="buttonTest">
      <ButtonComponent
        size="small"
        name="Test1"
        click={() => setTestButton(!testButton)}
      />
      {testButton && (
        <div>Przycisk działa</div>
      )}
      <ButtonComponent
        size="auto"
        name="Test2"
      />
    </div>
  )
}

export default ButtonTest
