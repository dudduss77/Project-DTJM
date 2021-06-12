import { getUserID } from "../../services/userService";

export const userActionType = {
  addAd: "ADD-AD",
  editAd: "EDIT-AD",
  deleteAd: "DELETE-AD",
  logIn: "LOG-IN",
  logOut: "LOG-OUT",
  fetch: "FETCH",
  fetch_category: "FETCH_CATEGORY"
};

const userDataReducer = (state, action) => {
  switch (action.type) {
    case userActionType.logIn:
      return { ...state, logged: true };
    
    case userActionType.logOut:
      return { ...state, logged: false };

    

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

    case userActionType.fetch:
        return { ...state, ...action.payload }

    case userActionType.fetch_category:
        state.category = action.payload
        return state;

    default:
      throw new Error("Please type a valid action type");
      break;
  }
};

export default userDataReducer;
