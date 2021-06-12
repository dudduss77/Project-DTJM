import React, { useState } from 'react'
import './ImageWrapperComponent.scss'
import ImageUploadComponent from '../imageUploadComponent/ImageUploadComponent'
import ImageDisplayComponent from '../imageDisplayComponent/ImageDisplayComponent';
import defaultImage from './profil.png';

const ImageWrapperComponent = () => {

  const [imageURL, setUrl] = useState(defaultImage)

  const handleChange = (fileUrl) => {
    setUrl(fileUrl)
  }

  const deleteImage = () => {
    setUrl(defaultImage)
  }

  return (
    <div className="imageWrapperComponent">
      <h1 className="imageWrapperComponent__h1">Avatar</h1>
      <ImageUploadComponent change={handleChange} />

      <ImageDisplayComponent srcUrl={imageURL} click={deleteImage} />

    </div>
  )
}

export default ImageWrapperComponent
