import React from "react";
import "./AvatarComponent.scss";

const AvatarComponent = ({ size, avatarSrc, avatarAlt }) => {
  return (
    <img
      className={`avatarComponent avatarComponent--${size}`}
      src={avatarSrc}
      alt={avatarAlt}
    />
  );
};

export default AvatarComponent;
