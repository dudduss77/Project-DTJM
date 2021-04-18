import React from 'react'
import './ButtonComponent.scss'


const ButtonComponent = ({click, size="auto", name}) => {
  return (
    <button onClick={click} className={`buttonComponent buttonComponent--${size}`}>
      {name}
    </button>
  )
}

export default ButtonComponent
