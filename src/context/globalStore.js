import { useReducer, createContext} from 'react';

import categoryReducer from './reducers/categoryReducer';
import userDataReducer from './reducers/userDataReducer';

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

    const [userData, setUserData] = useReducer(userDataReducer, {
        logged: true,
        avatarSrc: "/assets/profil.png",
        avatarAlt: "Avatar",
        name: "Jan Kowalski",
        nick: "Kowal",
        email: "jankowalski@gmail.com",
        location: "Wałbrzych",
        description: "Testowy opis"
    })

    const testAd = [
        {
            path: "/tempPath",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
        },
        {
            path: "/tempPath1",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
        },
        {
            path: "/tempPath2",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
        },
        {
            path: "/tempPath3",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
        },
        {
            path: "/tempPath4",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
        },
        {
            path: "/tempPath5",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
        },
        {
            path: "/tempPath6",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
        },
        {
            path: "/tempPath7",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
        },
        {
            path: "/tempPath8",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
        },
        {
            path: "/tempPath9",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
        },
        {
            path: "/tempPath10",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
        },
        {
            path: "/tempPath11",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
        },
        {
            path: "/tempPath12",
            imgSrc: "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            imgAlt: "Księżyc",
            header: "Projekt księżyc",
            category: "Kosmos",
        },
        {
            path: "/tempPath13",
            imgSrc: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            imgAlt: "Party",
            header: "Projekt X",
            category: "Impreza",
        },   
    ]

    return (
        <globalContext.Provider value={
            {
                category, 
                setCategory,
                userData,
                setUserData,
                testAd
            }
        }>
            {children}
        </globalContext.Provider>
    )

}

export default GlobalProvider

