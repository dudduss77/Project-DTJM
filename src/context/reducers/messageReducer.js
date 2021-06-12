import * as MessageService from './../../services/messageService'

const messageReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      // state[action.id].content.push(action.payload);
      MessageService.add(action.id, action.payload)
      return state;
    
    case "FETCH":
      return action.payload;

    default:
      throw new Error("Please type a valid action type");
  }
};

export default messageReducer;
