export const userActionType = {
  addAd: "ADD-AD",
  editAd: "EDIT-AD",
};

const userDataReducer = (state, action) => {
  switch (action.type) {
    case userActionType.addAd:
      return { ...state, ad: [...state.ad, action.payload] };
    case userActionType.editAd:
      return {
        ...state,
        ad: state.ad.map((item) => {
            console.log(item.id === action.payload.id)
            console.log(action.payload.id, action.payload.editAd)
          if (item.id === action.payload.id) {
              console.log("Czy tutaj wszedłem")
            return action.payload.editAd;
          }
          return item;
        }),
      };
    default:
      throw new Error("Please type a valid action type");
      break;
  }
};

export default userDataReducer;
