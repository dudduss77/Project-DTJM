import React from 'react'
import "./AdvertismentHeaderComponent.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const AdvertismentHeaderComponent = ({header, localization, user,  img_src}) => {
  return (
    <div className="headerComponent2">
      <div className='headerComponent2__title'>
      <h2 className='headerComponent2__header'>{header}</h2>
      <h4 className='headerComponent2__localization'> {localization}</h4>
      <div>{user ? <FontAwesomeIcon className='headerComponent2__btn' icon="cog"/> : <FontAwesomeIcon className='btn' icon="heart"/> }
      </div>
      </div>
     
      <img src ={img_src} className='headerComponent2__image'/>
    </div>
  )
}
export default AdvertismentHeaderComponent
