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
    return (
        <globalContext.Provider value={
            {
                category, 
                setCategory,
                userData,
                setUserData
            }
        }>
            {children}
        </globalContext.Provider>
    )

}

export default GlobalProvider

