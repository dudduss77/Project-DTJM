import { useReducer, createContext} from 'react';

import categoryReducer from './reducers/categoryReducer';

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

    return (
        <globalContext.Provider value={
            {
                category, 
                setCategory
            }
        }>
            {children}
        </globalContext.Provider>
    )

}

export default GlobalProvider

