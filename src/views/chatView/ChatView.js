import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useContext, useState, useEffect, useRef} from 'react'
import './ChatView.scss'
import {globalContext} from '../../context/globalStore'
import InputComponent from '../../components/inputComponent/InputComponent'
import { parseDateTimeToString } from './../../helpers/helpers'

const ChatView = () => {

const { setChatVisibility, messages, setMessages } = useContext(globalContext);

const wrapperRef = useRef();
const refMessageBox = useRef();
const refBackArrow = useRef();

const handlerExit = () => setChatVisibility(false);

const handlerShowMessage = (e, index) => {
  wrapperRef.current.classList.add('active');
  refBackArrow.current.classList.remove('none-display');
  setActualIndex(index);
}

const handlerBack = () => {
  wrapperRef.current.classList.remove('active');
  refBackArrow.current.classList.add('none-display');
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
              <span>{item.name} <h5> {parseDateTimeToString(new Date(item.content[item.content.length-1].time))}</h5></span>
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

  <div className="chatView__wrapper__content__messageBox__values__date">
  {parseDateTimeToString(new Date(item.time))}
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

  if(inputMessage != "") {
    const payload = {
      value: inputMessage,
      fromYou: true,
      time: (new Date()).getTime()
  
    }

    console.log(payload)
    setMessages({type: "SEND", id: actualIndex,  payload});
  
    setInputMessage("")
    setResetInput(prev => !prev);
  }

}
const handlerEnterDown = ({code}) => (code=="Enter") ? handlerSend() : "";

useEffect(() => {
  setMappedContent(mappContent(actualIndex));
  
}, [resetInput, actualIndex])

useEffect(() => {
  refMessageBox.current.scrollTop = refMessageBox.current.scrollHeight
}, [mappedContnent])


  return (
    <div className="chatView">
      <div className="chatView__header ">
        <span>
            <p
              className="chatView__header__backArrow none-display"
              ref={refBackArrow}
              onClick={handlerBack}
            >
            <FontAwesomeIcon icon='chevron-left'/>
            </p>
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
          </div>

          <div className="chatView__wrapper__content__input">
            <InputComponent 
              placeholder="Wiadomość..."
              getValue={handlerGetValue}
              onKeyDown={handlerEnterDown}
              reset={resetInput}
              type="text"
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
