import React from 'react'
import './TemplateTwo.scss'

import ButtonComponent from "../../components/buttonComponent/ButtonComponent";

const TemplateTwo = ({header, leftTop, leftBottom, midOne, midTwo, right, buttonClick}) => {
  return (
    <div className="templateTwo">
      <h3 className="templateTwo__header">{header}</h3>
      <div className="templateTwo__leftTop">{leftTop}</div>
      <div className="templateTwo__leftBottom">{leftBottom}</div>
      <div className="templateTwo__midOne">{midOne}</div>
      <div className="templateTwo__midTwo">{midTwo}</div>
      <div className="templateTwo__right">{right}</div>
      <div className="templateTwo__bottom">
        <ButtonComponent
          size="small"
          name="Zapisz"
          click={buttonClick}
        />
      </div>
    </div>
  )
}

export default TemplateTwo
