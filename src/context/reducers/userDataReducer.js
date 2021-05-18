export const userActionType = {
  addAd: "ADD-AD",
  editAd: "EDIT-AD",
  deleteAd: "DELETE-AD",
};

const userDataReducer = (state, action) => {
  switch (action.type) {
    case userActionType.addAd:
      return { ...state, ad: [...state.ad, action.payload] };
    case userActionType.editAd:
      return {
        ...state,
        ad: state.ad.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload.editAd;
          }
          return item;
        }),
      };
    case userActionType.deleteAd:
      return {
        ...state,
        ad: state.ad.filter((item) => item.id !== action.payload.id),
      };
    default:
      throw new Error("Please type a valid action type");
      break;
  }
};

export default userDataReducer;
