import React from 'react'
import './ListViewComponent.scss' 


const ListViewComponent = ({header, list}) => {
  
  return (
    <div className="listBox">
      <h3>{header}</h3>
      <hr></hr>
      <ul>
      {list.map((each) => (<li key={each.id}>{each.text}</li>))}
      </ul>
    </div>
  )
}

export default ListViewComponent
