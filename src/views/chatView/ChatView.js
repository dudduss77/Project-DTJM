import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useContext, useState, useEffect, useRef} from 'react'
import './ChatView.scss'
import {globalContext} from '../../context/globalStore'
import InputComponent from '../../components/inputComponent/InputComponent'


const ChatView = () => {

const {setChatVisibility, messages, setMessages} = useContext(globalContext);

const wrapperRef = useRef();
const refMessageBox = useRef();

const handlerExit = () => setChatVisibility(false);

const handlerShowMessage = (e, index) => {
  wrapperRef.current.classList.add('active');
  setActualIndex(index);
}


const mappMess = () => messages.map((item, index) =>(
          <div 
              className="chatView__wrapper__list__item"
              onClick={(e) => {handlerShowMessage(e, index)}}
              key={index}
          >
            <div className="chatView__wrapper__list__item--img">
              <img src={item.avatarSrc} />
            </div>

            <div className="chatView__wrapper__list__item--body">
              <span>{item.name} <h5> 09.04.2021</h5></span>
              <p>
                {item.content[item.content.length-1].value.slice(0,31)}

                {(item.content[item.content.length-1].value.length>32) && "..."}
              </p>
            </div>
            <hr/>


          </div>

))

const mappContent = (ind) => messages[ind].content.map((item, index) =>(
  <div className={`chatView__wrapper__content__messageBox__values ${ item.fromYou && "chatView__wrapper__content__messageBox__values--you"}`}>
    {!item.fromYou && <img src={messages[actualIndex].avatarSrc} />}

  <div className="chatView__wrapper__content__messageBox__values__mess">
        {item.value}
  </div>
</div>

))



const [mappedMessages, setMappedMessages] = useState(mappMess());

const [actualIndex, setActualIndex] = useState(0);
const [mappedContnent, setMappedContent] = useState(mappContent(0));


const [inputMessage, setInputMessage] = useState("");
const [resetInput, setResetInput] = useState(true);

const handlerGetValue = (val) => setInputMessage(val);

const handlerSend = () => {
  const payload = {
    value: inputMessage,
    fromYou: true,
    time: 1

  }

  setMessages({type: "SEND", id: actualIndex,  payload});

  setInputMessage("")
  setResetInput(prev => !prev);
}
const handlerEnterDown = ({code}) => (code=="Enter") ? handlerSend() : "";

useEffect(() => {
  console.log("object")
  setMappedContent(mappContent(actualIndex));
  
}, [resetInput])

useEffect(() => {
  refMessageBox.current.scrollTop = refMessageBox.current.scrollHeight
}, [mappedContnent])


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
          
        {mappedMessages}
        </div>

        <div className="chatView__wrapper__content">
          <div className="chatView__wrapper__content__header">
            <img src={messages[actualIndex].avatarSrc} />
            <span>{messages[actualIndex].name}</span>
          </div>

          <div 
            className="chatView__wrapper__content__messageBox"
            ref={refMessageBox} 
          >
          {mappedContnent}
          {/* <p ref={refMessageBox} ></p> */}
          </div>

          <div className="chatView__wrapper__content__input">
            <InputComponent 
              placeholder="Wiadomość..."
              getValue={handlerGetValue}
              onKeyDown={handlerEnterDown}
              reset={resetInput}
            />

            <FontAwesomeIcon 
              icon='paper-plane' 
              onClick={handlerSend}
            />
          </div>

        </div>

      </div>
  
    </div>
  )
}

export default ChatView
