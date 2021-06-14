
const skillsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;

    default:
      throw new Error("Please type a valid action type");
  }
};

export default skillsReducer;
