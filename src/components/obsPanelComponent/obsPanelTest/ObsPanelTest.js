import React, {useState} from 'react'
import ObsPanelComponent from '../ObsPanelComponent';
import './ObsPanelTest.scss'


const ObsPanelTest = () => {
  return (
    <div className="obsPanelTest">
      <ObsPanelComponent data={[
        {
          name: "Tomasz Żukwowski",
          imgUrl: "/assets/profil.PNG"
        },

        {
          name: "Damina Karbowiak",
          imgUrl: "/assets/profil.PNG"
        },

        {
          name: "Maciej Kowalka",
          imgUrl: "/assets/profil.PNG"
        },

        {
          name: "Jarosław Bińczyk",
          imgUrl: "/assets/profil.PNG"
        },
      ]}/>
    </div>
  )
}

export default ObsPanelTest
