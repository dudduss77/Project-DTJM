export const userActionType = {
  addAd: "ADD-AD",
  editAd: "EDIT-AD",
  editUser: "EDIT-USER-DATA",
  editUserLinks: "EDIT-USER-LINKS",
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
    case userActionType.editUser:
      return {
        ...state,
        avatarSrc: action.payload.newUserData.avatarSrc,
        avatarAlt: action.payload.newUserData.avatarAlt,
        name: action.payload.newUserData.name,
        surname: action.payload.newUserData.surname,
        nick: action.payload.newUserData.nick,
        email: action.payload.newUserData.email,
        location: action.payload.newUserData.location,
        description: action.payload.newUserData.description,
        links: action.payload.links,
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
    default:
      throw new Error("Please type a valid action type");
      break;
  }
};

export default userDataReducer;
