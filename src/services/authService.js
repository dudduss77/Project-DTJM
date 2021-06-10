import firebase from './db.js';


//   console.log(firebase);



const createUser = async (email, pass, success = ()=>{}, err = (e)=>{}) => {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, pass);
        console.log(userCredential);
        success(userCredential);
    } catch(error) {

        switch(error.code) {
            case "auth/email-already-in-use": 
                err("Podany adres email jest już zajęty!");
            break;
          }
    }

}


export {
    createUser
}