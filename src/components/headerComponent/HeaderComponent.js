import { faComment, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { globalContext } from '../../context/globalStore'
import './HeaderComponent.scss'


const HeaderComponent = () => {
  let history = useHistory();
  const {userData : {logged}} = useContext(globalContext);
  
  const handlerClickMessage = () => history.push('/messages');

  const handlerClickUserProfile = () => history.push('/profil');

  const handlerClickAdd = () => history.push('/add');

  const handlerClickLogIn = () => history.push('/login');
  return (
    <div className="headerComponent">
      <div className="headerComponent__logo">
        DTJM
      </div>

      {
      logged ? 
        <div className="headerComponent__menu">
          <div className="headerComponent__menu__item" onClick={handlerClickMessage}>
            <FontAwesomeIcon icon={faComment}/>
          </div>

          <div className="headerComponent__menu__item" onClick={handlerClickUserProfile}>
            <FontAwesomeIcon icon={faUser}/>
          </div>

          <div className="headerComponent__menu__item" onClick={handlerClickAdd}>
            <FontAwesomeIcon icon={faPlus}/>
          </div>
        </div>

        :

        <div className="headerComponent__menu">
          <div className="headerComponent__menu__item" onClick={handlerClickLogIn}>
            <FontAwesomeIcon icon={faUser}/>
          </div>
        </div>
    
      }
      
    </div>
  )
}

export default HeaderComponent
