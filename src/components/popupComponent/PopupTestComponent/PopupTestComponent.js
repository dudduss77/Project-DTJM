import React, {useState} from 'react'

import PopupComponent from '../PopupComponent'
import ButtonComponent from '../../buttonComponent/ButtonComponent'

const PopupTestComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{alignSelf: 'center'}}>
      {show && <PopupComponent close={() => setShow(!show)}/>}
      <ButtonComponent
        size="small"
        name="Pokaż menu"
        click={() => setShow(!show)}
      />
    </div>
  )
}

export default PopupTestComponent
