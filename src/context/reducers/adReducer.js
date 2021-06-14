
const adReducer = (state, action) => {
    switch (action.type) {

        case 'FETCH':
            return action.payload
        break;

        case "FETCH_CATEGORY":
            return state.map((item, index) => {
                item.category = action.payload[index]
                return item;
            })
    
        case "FETCH_SKILLS":

            return state.map((item, index) => {
                item.skills = action.payload[index]
                return item;
            })
    
        default:
            throw new Error('Please type a valid action type')
            break;
    }
}


export default adReducer