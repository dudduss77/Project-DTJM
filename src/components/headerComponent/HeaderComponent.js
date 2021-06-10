import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import * as AuthService from './../../services/authService';

import { globalContext } from '../../context/globalStore'
import './HeaderComponent.scss'


const HeaderComponent = () => {
  let history = useHistory();
  const {userData : {logged}, setUserData, setAppData, setChatVisibility} = useContext(globalContext);
  
  const handlerClickMessage = () => setChatVisibility(true);

  const handlerClickUserProfile = () => history.push('/profil');

  const handlerClickAdd = () => history.push('/add-ad');

  const handlerClickLogOut = () => AuthService.logOut(
                                                      () => setUserData({ type: "LOG-OUT"}),
                                                      err => console.log(err)
                                                     );

  const handlerClickLogIn = () =>{
    setAppData({type: "SHOW_POPUP"})
  };
  return (
    <div className="headerComponent">
      <div onClick={() => history.push('/')} className="headerComponent__logo">
        DTJM
      </div>

      {
      logged ? 
        <div className="headerComponent__menu">
          <div className="headerComponent__menu__item" onClick={handlerClickMessage}>
            <FontAwesomeIcon icon="comment"/>
          </div>

          <div className="headerComponent__menu__item" onClick={handlerClickUserProfile}>
            <FontAwesomeIcon icon="user" />
          </div>

          <div className="headerComponent__menu__item" onClick={handlerClickAdd}>
            <FontAwesomeIcon icon="plus" />
          </div>

          <div className="headerComponent__menu__item" onClick={handlerClickLogOut}>
            <FontAwesomeIcon icon="power-off" />
          </div>

        </div>

        :

        <div className="headerComponent__menu">
          <div className="headerComponent__menu__item" onClick={handlerClickLogIn}>
            <FontAwesomeIcon icon="user" />
          </div>
        </div>
    
      }
      
    </div>
  )
}

export default HeaderComponent
