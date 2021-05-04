import React from 'react'

import ButtonComponent from "../buttonComponent/ButtonComponent";

const DeleteAd = () => {

  const submitDeleteAd = () => {
    
  }

  return (
    <ButtonComponent
      size="mid"
      bgColor="red"
      name="Usuń ogłoszenie"
      click={() => submitDeleteAd()}
    />
  )
}

export default DeleteAd
