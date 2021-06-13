import { useReducer, createContext, useState} from 'react';

import categoryReducer from './reducers/categoryReducer';
import userDataReducer from './reducers/userDataReducer';
import appReducer from './reducers/appReducer';
import skillsReducer from './reducers/skillsReducer';
import LoginComponent from '../components/loginComponent/LoginComponent';
import messageReducer from './reducers/messageReducer';

export const globalContext = createContext();
// this data store is for general purpose for all components.
// In this store we will have common data like catgory...

const GlobalProvider = ({children}) => {
    const [category, setCategory] = useReducer(categoryReducer, [
        {
            id: 1,
            name: "Muzyka",
            icon: ['fas', 'music']
        },
        {
            id: 1,
            name: "Elektronika",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Sport",
            icon: ['fas', 'swimmer']
        },
        {
            id: 1,
            name: "Inne",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Hobby",
            icon: ['fas', 'baseball-ball']
        },
        {
            id: 1,
            name: "Muzyka",
            icon: ['fas', 'music']
        },
        {
            id: 1,
            name: "Elektronika",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Sport",
            icon: ['fas', 'swimmer']
        },
        {
            id: 1,
            name: "Inne",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Hobby",
            icon: ['fas', 'baseball-ball']
        },
        {
            id: 1,
            name: "Muzyka",
            icon: ['fas', 'music']
        },
        {
            id: 1,
            name: "Elektronika",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Sport",
            icon: ['fas', 'swimmer']
        },
        {
            id: 1,
            name: "Inne",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Hobby",
            icon: ['fas', 'baseball-ball']
        },
        {
            id: 1,
            name: "Muzyka",
            icon: ['fas', 'music']
        },
        {
            id: 1,
            name: "Elektronika",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Sport",
            icon: ['fas', 'swimmer']
        },
        {
            id: 1,
            name: "Inne",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Hobby",
            icon: ['fas', 'baseball-ball']
        },
        {
            id: 1,
            name: "Muzyka",
            icon: ['fas', 'music']
        },
        {
            id: 1,
            name: "Elektronika",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Sport",
            icon: ['fas', 'swimmer']
        },
        {
            id: 1,
            name: "Inne",
            icon: ['fas', 'plug']
        },
        {
            id: 1,
            name: "Hobby",
            icon: ['fas', 'baseball-ball']
        },
        
    ]);

    const allUser = [
        {
            userId: 2,
            avatarSrc: "/assets/profil.png",
            avatarAlt: "Avatar",
            name: "Duddus",
            surname: "Duddusiowy",
            nick: "duddus",
            email: "dudd@gmail.com",
            location: "Wałbrzych",
            description: "Testowy opis",
            ad: [],
            skills: [],
            category: [],
            links: []
        },
        {
            userId: 3,
            avatarSrc: "/assets/profil.png",
            avatarAlt: "Avatar",
            name: "dw",
            surname: "w",
            nick: "duddus",
            email: "dudd@gmail.com",
            location: "Wałbrzych",
            description: "Testowy opis",
            ad: [],
            skills: [],
            category: [],
            links: []
        }
    ]

    const [skills, setSkills] = useReducer(skillsReducer ,[
        {
            id: 1,
            name: "JavaScript",
            // icon: ['fas', 'music']
        }
    ])  

    const [userData, setUserData] = useReducer(userDataReducer, {
        logged: 1,
        userId: 1,
        avatarSrc: "/assets/profil.png",
        avatarAlt: "Avatar",
        name: "Jan",
        surname: "Kowalski",
        nick: "Kowal",
        email: "jankowalski@gmail.com",
        location: "Wałbrzych",
        description: "Testowy opis",
        ad: [
            // {
            //     id: 1,
            //     path: "/ad-settings",
            //     imgSrc: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
            //     imgAlt: "Testowe ogłoszenie",
            //     header: "Testowe ogłoszenie",
            //     category: "Test",
            //     desc: "Coś tam sobie zrobię",
            //     location: ""
            // },
            // {
            //     id: 2,
            //     path: "/ad-settings",
            //     imgSrc: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
            //     imgAlt: "Testowe ogłoszenie",
            //     header: "Szukam Tomka",
            //     category: "Wpierdziel",
            //     desc: "Tomek gdzie jesteś?",
            //     location: ""
            // },
            

        ],
        peopleObs: [
            // {
            //     id: 1,
            //     name: "Tomasz Żukwowski",
            //     imgUrl: "/assets/profil.PNG"
            //   },
      
            //   {
            //     id: 2,
            //     name: "Damina Karbowiak",
            //     imgUrl: "/assets/profil.PNG"
            //   },
            {
                obsUserId: 2
            }
        ],
        skills: [
            {
                id: 1,
                name: "JS"
            },
            {
                id: 2,
                name: "C++"
            },
            {
                id: 3,
                name: "JS"
            },
            {
                id: 4,
                name: "C++"
            },
            {
                id: 5,
                name: "JS"
            },
            {
                id: 6,
                name: "C++"
            },
            {
                id: 7,
                name: "C++"
            },
            {
                id: 8,
                name: "JS"
            },
            {
                id: 9,
                name: "C++"
            },
            {
                id: 10,
                name: "C++"
            },
            {
                id: 11,
                name: "C++"
            },
            {
                id: 12,
                name: "JS"
            },
            {
                id: 13,
                name: "C++"
            },
            {
                id: 14,
                name: "C++"
            },
            {
                id: 15,
                name: "C++"
            },
            {
                id: 16,
                name: "JS"
            },
            {
                id: 17,
                name: "C++"
            },
        ],
        category: [
            {
                id: 1,
                name: "IT"
            },
            {
                id: 2,
                name: "Kosmos"
            },
        ], 
        links: [
            // {
            //     name: "Github",
            //     path: "https://github.com/dudduss77",
            //     icon: 'github',
            //     title: null,
            // }
        ]
    })

    const [messages, setMessages] = useReducer(messageReducer, [
        {
            id: 2,
            name: "Tomasz Żukwowski",
            avatarSrc: "/assets/profil.png",
            content: [
                {
                    fromYou: false,
                    value: "Cześć co u ciebie słychać?",
                    time: 1620404348271
                }, 
                {
                    fromYou: true,
                    value: "A nic, testuje sobie chat",
                    time: 1620404555793
                }, 
                {
                    fromYou: false,
                    value: "Robisz chat ? Fajnie.",
                    time: 1620404665220
                }, 
                {
                    fromYou: false,
                    value: "Ma jakieś ciekawe funkcje?",
                    time: 1620404665221
                }, 
                {
                    fromYou: true,
                    value: "Nie interesuj się",
                    time: 1620404348271
                }, 

                {
                    fromYou: true,
                    value: "To tajne",
                    time: 1620404348271
                }, 

            ]
        },

        {
            id: 3,
            name: "Amciek Destroyer",
            avatarSrc: "/assets/profil.png",
            content: [
                {
                    fromYou: false,
                    value: "Cześć, masz może pożyczyć kłodę?",
                    time: 1620404348271
                }, 
                {
                    fromYou: true,
                    value: "co ?",
                    time: 1620404555793
                }, 
                {
                    fromYou: false,
                    value: "nie to nie",
                    time: 1620404348271
                }, 
                {
                    fromYou: false,
                    value: "...",
                    time: 1620404348271
                }, 

            ]
        },

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
                setChatVisibility,
                skills,
                setSkills,
                allUser
            }
        }>
            {children}
        </globalContext.Provider>
    )

}

export default GlobalProvider

