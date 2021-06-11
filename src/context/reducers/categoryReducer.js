
const categoryReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            //todo
        break;
        
        case 'EDIT_CATEGORY':
            //todo
        break;

        case 'REM_CATEGORY':
            //todo
        break;

        case 'FETCH':
            return action.payload
        break;

    
        default:
            throw new Error('Please type a valid action type')
            break;
    }
}


export default categoryReducer