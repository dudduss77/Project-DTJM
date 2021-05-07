import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useContext, useState, useEffect, useRef} from 'react'
import './ChatView.scss'
import {globalContext} from '../../context/globalStore'


const ChatView = () => {

const {setChatVisibility, messages} = useContext(globalContext);

const wrapperRef = useRef();

const handlerExit = () => setChatVisibility(false);
const handlerShowMessage = () => wrapperRef.current.classList.add('active');
console.log(messages)
  return (
    <div className="chatView">
      <div className="chatView__header">
        <span>
          Wiadomości
        </span>

        <span 
          className="chatView__header--exit"
          onClick={handlerExit}
        >
          <FontAwesomeIcon icon='times'/>
        </span>
      </div>
      <div className="chatView__wrapper" ref={wrapperRef}>
        <div className="chatView__wrapper__list">
          <div 
              className="chatView__wrapper__list__item"
              onClick={handlerShowMessage}
          >
            <div className="chatView__wrapper__list__item--img">
              <img src="/assets/profil.png" />
            </div>

            <div className="chatView__wrapper__list__item--body">
              <span>Tomasz Żukwowski <h5> 09.04.2021</h5></span>
              <p>Czy ogłoszenie nadal aktualn...</p>
            </div>
            <hr/>


          </div>

        </div>






        <div className="chatView__wrapper__list">
          <div className="chatView__wrapper__list__item">
            <div className="chatView__wrapper__list__item--img">
              <img src="/assets/profil.png" />
            </div>

            <div className="chatView__wrapper__list__item--body">
              <span>Tomasz Żukwowski <h5> 09.04.2021</h5></span>
              <p>Czy ogłoszenie nadal aktualn...</p>
            </div>
            <hr/>


          </div>

        </div>






      </div>
      

      

    </div>
  )
}

export default ChatView
