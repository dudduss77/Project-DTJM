import React from 'react'
import './AdBlockTest.scss'

import AdBlockComponent from '../AdBlockComponent'

const AdBlockTest = () => {
  return (
    <div className="adBlockTest">
      <AdBlockComponent
        imgSrc="https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        imgAlt="Księżyc"
        header="Projekt księżyc"
        category="Kosmos"
      />
      <AdBlockComponent
        imgSrc="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        imgAlt="Party"
        header="Projekt X"
        category="Impreza"
      />
      <AdBlockComponent
        imgSrc="https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        imgAlt="Band"
        header="Zespół muzyczny"
        category="Muzyka"
      />
      <AdBlockComponent
        // imgSrc="https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        imgAlt="CNC"
        header="Budowa CNC"
        category="Majsterkowanie"
      />
      <AdBlockComponent
        // imgSrc="https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        imgAlt="Koszykówka"
        header="Gra w kosza"
        category="Sport"
      />
    </div>
  )
}

export default AdBlockTest
