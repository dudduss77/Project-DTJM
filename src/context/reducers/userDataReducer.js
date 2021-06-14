// import { getUserID } from "../../services/userService";
// import * as UserService from "../../services/userService";

export const userActionType = {
  addAd: "ADD-AD",
  editAd: "EDIT-AD",
  editUser: "EDIT-USER-DATA",
  editUserLinks: "EDIT-USER-LINKS",
  deleteAd: "DELETE-AD",
  logIn: "LOG-IN",
  logOut: "LOG-OUT",
<<<<<<< HEAD
  fetch: "FETCH",
  fetch_category: "FETCH_CATEGORY",
  fetch_skills: "FETCH_SKILLS",
  // update: "UPDATE",
  // addCategory: "ADD_CATEGORY",
  // addSkill: "ADD_SKILL",
  // addLink: "ADD_LINK",
=======
  addToObs: "ADD-TO-OBS"
>>>>>>> develop
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
    case userActionType.editUser:
      console.log(action.payload);
      return {
        ...state,
        avatarSrc: action.payload.avatarSrc,
        avatarAlt: action.payload.avatarAlt,
        name: action.payload.name,
        surname: action.payload.surname,
        nick: action.payload.nick,
        location: action.payload.location,
        description: action.payload.description,
        links: action.payload.links,
        category: action.payload.category,
        skills: action.payload.skills
      };
    case userActionType.editUserLinks:
      return {
        ...state,
        links: action.payload.links,
      };

    case userActionType.deleteAd:
      return {
        ...state,
        ad: state.ad.filter((item) => item.id !== action.payload.id),
      };

<<<<<<< HEAD
    case userActionType.fetch:
        return { ...state, ...action.payload }

    case userActionType.fetch_category:
        state.category = action.payload
        return state;

    case userActionType.fetch_skills:
        state.skills = action.payload
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
=======
    case userActionType.addToObs:
      return {
        ...state,
        peopleObs: [...state.peopleObs, action.payload]
      }
>>>>>>> develop

    default:
      throw new Error("Please type a valid action type");
      break;
  }
};

export default userDataReducer;
