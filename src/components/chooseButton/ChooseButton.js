import React from 'react'
import './ChooseButton.scss'

const ChooseButton = ({click, checked, name}) => {
  return (
    <div onClick={click} className={`chooseButton ${checked ? 'chooseButton--checked': ''}`}>
      {name}
    </div>
  )
}

export default ChooseButton
