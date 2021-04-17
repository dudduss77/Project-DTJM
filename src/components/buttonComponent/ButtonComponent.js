import React from 'react'
import './ButtonComponent.scss'


const ButtonComponent = (props) => {
  return (
    <button onClick={props.click} className={`buttonComponent buttonComponent--${props.size}`}>
      {props.name}
    </button>
  )
}

export default ButtonComponent
