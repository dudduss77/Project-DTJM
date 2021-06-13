import firebase, { db } from './db.js';



const createUser = async (email, pass, success = ()=>{}, err = (e)=>{}) => {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, pass);
        const data = await db.collection("users").doc(userCredential.user.uid).set({
            email,
            avatarAlt: "Avatar",
            avatarSrc: "/assets/profil.png",
            ad: [],
            category: [],
            description: "Brak opisu",
            links: [],
            peopleObs: [],
            skills: []
        })

        console.log(data);

        success(userCredential);
    } catch(error) {

        switch(error.code) {
            case "auth/email-already-in-use": 
                err("Podany adres email jest już zajęty!");
            break;

            default:
                err(err.code);
            break;
          }
    }

}


const authUser = async (email, pass, success = ()=>{}, err = (e)=>{}) => {

    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, pass);
        console.log(userCredential);
        success(userCredential);
    } catch(error) {

        switch(error.code) {
            case "auth/wrong-password": 
            case "auth/user-not-found": 
                err("Nieprawidłowy email lub hasło");
            break;

            case "auth/too-many-requests":
                err("Zbyt wiele prób logowania, spróbuj ponownie później");
            break;

            default:
                err(err.code);
            break;
          }
          console.log(error);
    }
}


const logOut = async (success, err) => {
    try {
        await firebase.auth().signOut();
        success();
        
    } catch(err) {
        err();
    }
    
}


const observeUserLoginState = (whenTrue, whenFalse) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) whenTrue(user);
        else whenFalse();
      });


}

const sendPasswordResetEmail = (email, success = ()=>{}, err = (e)=>{}) => {
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    success()
  })
  .catch((error) => {

    switch(error.code) {
        case "auth/too-many-requests":
            err("Zbyt wiele zapytań z tego urządzenia. Spróbuj ponownie później");
        break;
        case "auth/user-not-found":
            err("Podany Adres email nie istnieje!");
        break;
        default:
            err(error.message)
        break;
    }
  });
}

// const checkEmailExist = async (email) => await firebase.auth().ge




export {
    createUser,
    authUser,
    logOut, 
    observeUserLoginState,
    sendPasswordResetEmail,
    // checkEmailExist
}