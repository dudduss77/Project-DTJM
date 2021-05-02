import React from 'react'
import "./ErrorComponent.scss"

const ErrorComponent = ({errorMsg}) => {
  return (
    <p className="errorComponent">{errorMsg}</p>
  )
}

export default ErrorComponent
