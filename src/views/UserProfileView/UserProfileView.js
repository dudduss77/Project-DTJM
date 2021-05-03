import React from 'react'
import './UserProfileView.scss'

import UserInfoComponent from '../../components/userInfoComponent/UserInfoComponent'
import AdBlockWrapperComponent from '../../components/adBlockWrapperComponent/AdBlockWrapperComponent'

const UserProfileView = () => {
  return (
    <div className="userProfileView">
      <UserInfoComponent/>
      <div className="userProfileView__listWrapper">
        <div className="userProfileView__listWrapper__list">Skills</div>
        <div className="userProfileView__listWrapper__list">Kategorie</div>
        <div className="userProfileView__listWrapper__list">Linki</div>
        <div className="userProfileView__listWrapper__list">Obserwowani ludzie</div>
      </div>
      <AdBlockWrapperComponent header="Moje ogłoszenia"/>
    </div>
  )
}

export default UserProfileView
