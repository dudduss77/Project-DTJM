import React, { useState } from 'react'
import './ImageUploadComponent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImageUploadComponent = (props) => {

  const handleOnChange = (e) => {
    const objectURL = URL.createObjectURL(new Blob(e.target.files))
    //console.log(objectURL);
    props.change(objectURL);
  }

  return (
    <div className="imageUploadComponent">
      <input id="uploadButton" className="imageUploadComponent__uploadButton" type="file" accept="image/*" onChange={handleOnChange} />
      <label className="imageUploadComponent__labelUpload" htmlFor="uploadButton">załaduj avatar <FontAwesomeIcon className="imageUploadComponent__fileIcon" icon="image" /></label>
    </div>

  )
}

export default ImageUploadComponent
