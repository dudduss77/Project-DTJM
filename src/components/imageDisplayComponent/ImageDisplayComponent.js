import React from 'react'
import './ImageDisplayComponent.scss'

const ImageDisplayComponent = ({ srcUrl, click }) => {

  return (
    <div className="imageDisplayComponent">
      <img className="imageDisplayComponent__img" src={srcUrl} alt="wybierz poprawny plik" />
      <button className="imageDisplayComponent__deleteButton" onClick={click}> X</button>
    </div>
  )
}

export default ImageDisplayComponent
