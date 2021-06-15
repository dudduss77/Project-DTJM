import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import { NotificationManager } from 'react-notifications';
import { globalContext } from '../../context/globalStore';
import ButtonComponent from '../buttonComponent/ButtonComponent'

import * as MessageService from './../../services/messageService'

import './NewMessageComponent.scss';

const NewMessageComponent = () => {
    const { newMessagePopUp, allUser, setNewMessagePopUp, messages } = useContext(globalContext);

    const handlerOnExit = () => setNewMessagePopUp({ showPopUp: false, id: ""});
    const findUser = () => allUser.find(item => item.userId === newMessagePopUp.id);
    const [ text, setText ] = useState("");
    const handlerOnChange = e => setText(e.target.value)

    //the method is checking that user was chat with user with "id" in this App
    const checkNewConversation = id =>  messages.find(item => item.id === findUser().userId);

    const onSucces = () => {
        handlerOnExit();
        NotificationManager.success(" Wiadomość wysłana")
    }

    const onError = err => {
        console.log("sukces");
        console.log(err);
    }
    const handlerOnSubmit = () => {
        // api

        const payload = {
            fromYou: true,
            time: (new Date()).getTime(),
            value: text
        }

        if(checkNewConversation(newMessagePopUp.id) == undefined) 
            MessageService.addNew(findUser(), payload, onSucces, onError);
        else 
            MessageService.add(newMessagePopUp.id,  payload, onSucces, onError);
    }


    return (
        <div className="NewMessageComponent">

            <div className="NewMessageComponent__container">
                <div className="NewMessageComponent__container__to">
                    Wiadomość do: {findUser().name + " " + findUser().surname}
                </div>
                <div className="NewMessageComponent__container__textarea">
                    <textarea
                        value={text}
                        onChange={handlerOnChange}
                    ></textarea>
                </div>

                <ButtonComponent
                    click={handlerOnSubmit}
                    size = "small"
                    name = "Wyślij"
                    bgColor = 'default'
                />      

            <div className="NewMessageComponent__container__exit" onClick={handlerOnExit}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>           
            </div>



        </div>
    )
}

export default NewMessageComponent
