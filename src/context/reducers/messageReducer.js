const messageReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      // console.log(action)
      state[action.id].content.push(action.payload);
      console.log(state);

      return state;

    default:
      throw new Error("Please type a valid action type");
  }
};

export default messageReducer;
