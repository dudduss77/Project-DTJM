import React, { useState, useEffect } from "react";
import "./ImageWrapperComponent.scss";
import ImageUploadComponent from "../imageUploadComponent/ImageUploadComponent";
import ImageDisplayComponent from "../imageDisplayComponent/ImageDisplayComponent";
import defaultImage from "./profil.png";

const ImageWrapperComponent = ({
  getData,
  informToGetData,
  setData = defaultImage,
}) => {
  const [imageURL, setUrl] = useState(setData);

  const handleChange = (fileUrl) => {
    setUrl(fileUrl);
  };

  const deleteImage = () => {
    setUrl(defaultImage);
  };

  useEffect(() => {
    getData(imageURL);
  }, [informToGetData]);

  useEffect(() => {
    setUrl(setData);
  }, [setData]);

  return (
    <div className="imageWrapperComponent">
      <h3 className="imageWrapperComponent__h3">Avatar</h3>
      <ImageUploadComponent change={handleChange} />

      <ImageDisplayComponent srcUrl={imageURL} click={deleteImage} />
    </div>
  );
};

export default ImageWrapperComponent;
