// import { getUserID } from "../../services/userService";
// import * as UserService from "../../services/userService";

export const userActionType = {
  addAd: "ADD-AD",
  editAd: "EDIT-AD",
  deleteAd: "DELETE-AD",
  logIn: "LOG-IN",
  logOut: "LOG-OUT",
  fetch: "FETCH",
  fetch_category: "FETCH_CATEGORY",
  // update: "UPDATE",
  // addCategory: "ADD_CATEGORY",
  // addSkill: "ADD_SKILL",
  // addLink: "ADD_LINK",
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

    // case userActionType.update:
    //   UserService.update(payload)
    //   return state;

    // case userActionType.addCategory:
    //   UserService.addCategory(payload)
    //   return state;

    // case userActionType.addSkill:
    //   UserService.addSkill(payload)
    //   return state;

    // case userActionType.addLink:
    //   UserService.addLink(payload)
    //   return state;

    default:
      throw new Error("Please type a valid action type");
      break;
  }
};

export default userDataReducer;
