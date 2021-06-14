import React from 'react'
import "./SearchItemBlock.scss"
import { useHistory } from "react-router";

const SearchItemBlock = ({id, header, location, desc, image}) => {
  const history = useHistory();
  return (
    <div onClick={() => history.push(`/ad/${id}`)} className="searchItemBlock">
      <div className="searchItemBlock__header">
        <h3>{header}</h3>
        <h4>{location}</h4>
      </div>
      <div className="searchItemBlock__content">
        <img className="searchItemBlock__content__image" src={image} alt={"tt"}/>
        <div className="searchItemBlock__content__desc">{desc}</div>
      </div>
    </div>
  )
}

export default SearchItemBlock
