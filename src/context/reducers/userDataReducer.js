export const userActionType = {
  addAd: "ADD-AD",
  editAd: "EDIT-AD",
  editUser: "EDIT-USER-DATA",
  editUserLinks: "EDIT-USER-LINKS",
  deleteAd: "DELETE-AD",
  logIn: "LOG-IN",
  logOut: "LOG-OUT",
  addToObs: "ADD-TO-OBS"
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

    case userActionType.addToObs:
      return {
        ...state,
        peopleObs: [...state.peopleObs, action.payload]
      }

    default:
      throw new Error("Please type a valid action type");
      break;
  }
};

export default userDataReducer;
