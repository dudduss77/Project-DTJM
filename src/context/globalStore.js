import { useReducer, createContext, useState, useEffect} from 'react';

import categoryReducer from './reducers/categoryReducer';
import userDataReducer from './reducers/userDataReducer';
import appReducer from './reducers/appReducer';
import LoginComponent from '../components/loginComponent/LoginComponent';
import messageReducer from './reducers/messageReducer';

import * as CategoryService from './../services/categoryService';
import * as UserService from './../services/userService';
import * as MessageService from './../services/messageService';

export const globalContext = createContext();
// this data store is for general purpose for all components.
// In this store we will have common data like catgory...

const GlobalProvider = ({children}) => {



    useEffect(() => {
        // fetch data from server
        CategoryService.fetchDataRealTime((payload) => setCategory({ type: 'FETCH', payload}));    
    }, [])


    const [category, setCategory] = useReducer(categoryReducer, []);

    const [userData, setUserData] = useReducer(userDataReducer, {})

    const [messages, setMessages] = useReducer(messageReducer, [
        // {
        //     id: 2,
        //     name: "Tomasz Żukwowski",
        //     avatarSrc: "/assets/profil.png",
        //     content: [
        //         {
        //             fromYou: false,
        //             value: "Cześć co u ciebie słychać?",
        //             time: 1620404348271
        //         }, 
        //         {
        //             fromYou: true,
        //             value: "A nic, testuje sobie chat",
        //             time: 1620404555793
        //         }, 
        //         {
        //             fromYou: false,
        //             value: "Robisz chat ? Fajnie.",
        //             time: 1620404665220
        //         }, 
        //         {
        //             fromYou: false,
        //             value: "Ma jakieś ciekawe funkcje?",
        //             time: 1620404665221
        //         }, 
        //         {
        //             fromYou: true,
        //             value: "Nie interesuj się",
        //             time: 1620404348271
        //         }, 

        //         {
        //             fromYou: true,
        //             value: "To tajne",
        //             time: 1620404348271
        //         }, 

        //     ]
        // },

        // {
        //     id: 3,
        //     name: "Amciek Destroyer",
        //     avatarSrc: "/assets/profil.png",
        //     content: [
        //         {
        //             fromYou: false,
        //             value: "Cześć, masz może pożyczyć kłodę?",
        //             time: 1620404348271
        //         }, 
        //         {
        //             fromYou: true,
        //             value: "co ?",
        //             time: 1620404555793
        //         }, 
        //         {
        //             fromYou: false,
        //             value: "nie to nie",
        //             time: 1620404348271
        //         }, 
        //         {
        //             fromYou: false,
        //             value: "...",
        //             time: 1620404348271
        //         }, 

        //     ]
        // },

    ])

    const [chatVisibility, setChatVisibility] = useState(true);

    const [appData, setAppData] = useReducer(appReducer, {
        showPopup: false
    })

    const testAd = [
        {
            id: 1,
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
            desc: "Lecimy w kosmos",
            location: ""
        },
        {
            id: 2,
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
            desc: "Jazda jazda",
            location: ""
        },
        {
            id: 1,
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
            desc: "Lecimy w kosmos",
            location: ""
        },
        {
            id: 2,
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
            desc: "Jazda jazda",
            location: ""
        },
        {
            id: 1,
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
            desc: "Lecimy w kosmos",
            location: ""
        },
        {
            id: 2,
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
            desc: "Jazda jazda",
            location: ""
        },
        {
            id: 1,
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
            desc: "Lecimy w kosmos",
            location: ""
        },
        {
            id: 2,
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
            desc: "Jazda jazda",
            location: ""
        },
        {
            id: 1,
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
            desc: "Lecimy w kosmos",
            location: ""
        },
        {
            id: 2,
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
            desc: "Jazda jazda",
            location: ""
        },
        {
            id: 1,
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
            desc: "Lecimy w kosmos",
            location: ""
        },
        {
            id: 2,
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
            desc: "Jazda jazda",
            location: ""
        },
        {
            id: 1,
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
            desc: "Lecimy w kosmos",
            location: ""
        },
        {
            id: 2,
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
            desc: "Jazda jazda",
            location: ""
        },
        {
            id: 1,
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
            desc: "Lecimy w kosmos",
            location: ""
        },
        {
            id: 2,
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
            desc: "Jazda jazda",
            location: ""
        },
        {
            id: 1,
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
            desc: "Lecimy w kosmos",
            location: ""
        },
        {
            id: 2,
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
            desc: "Jazda jazda",
            location: ""
        },
    ]

    const getCategoryNameByIdFromContext = (id) => {
        for(let i = 0; i<category.length; i++)
                if(category[i].id == id.trim()) return category[i].name; 
        return false;
    }

    useEffect(() => {
        if(userData.category) {
            const payload = userData.category.map(item => {
                item.name = getCategoryNameByIdFromContext(item.id);
                return item;
            });    
            console.log(payload)
            setUserData({ type: "FETCH_CATEGORY", payload})
        }
    }, [category, userData]);


    useEffect(() => {
        if(userData.logged) {
            // UserService.update({
            //     description: "testowy opis"
            // });

            // UserService.removeCategory({
            //     id: "O9mxjftWUIBWok4H3rmf"
            // });

            // UserService.removeLink({
            //     id: 2,
            //     name: "facebook.com"
            // })

            // UserService.removeSkill({
            //     id: 10,
            //     name: "dodane z api"
            // })
        }
    },[userData])

    useEffect(() => {
        if(userData.logged) {
           UserService.fetchDataRealTime((payload) => setUserData({ type: 'FETCH', payload}));
           MessageService.fetchDataRealTime((payload) => setMessages({ type: "FETCH", payload})) 
        }
            
    }, [userData.logged]);

    useEffect(() => {
        console.log(messages)
    }, [messages])

    useEffect(() => {
        console.log(userData)
    }, [userData.category]);

    return (
        <globalContext.Provider value={
            {
                category, 
                setCategory,
                userData,
                setUserData,
                appData,
                setAppData,
                testAd,
                messages,
                setMessages,
                chatVisibility, 
                setChatVisibility
            }
        }>
            {children}
        </globalContext.Provider>
    )

}

export default GlobalProvider

