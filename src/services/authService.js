import firebase from './db.js';



const createUser = async (email, pass, success = ()=>{}, err = (e)=>{}) => {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, pass);
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


export {
    createUser,
    authUser,
    logOut, 
    observeUserLoginState
}