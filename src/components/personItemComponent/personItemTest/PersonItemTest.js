import React, {useState} from 'react'
import PersonItemComponent from '../PersonItemComponent';
import './PersonItemTest.scss'


const PersonItemTest = () => {
  return (
    <div className="personItemTest">
      <PersonItemComponent name="Tomasz Żukwowski" imgUrl="/assets/profil.PNG"/>
    </div>
  )
}

export default PersonItemTest
