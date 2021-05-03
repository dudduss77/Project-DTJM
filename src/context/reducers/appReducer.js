const appReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {...state, showPopup: true}

    case "CLOSE_POPUP":
      return {...state, showPopup: false}
    default:
      throw new Error("Please type a valid action type");
  }
};

export default appReducer;
