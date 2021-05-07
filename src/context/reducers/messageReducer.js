const messageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESS":
      //todo
      return true

    default:
      throw new Error("Please type a valid action type");
  }
};

export default messageReducer;
