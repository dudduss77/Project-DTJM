import firebase,  { db } from './db.js';

const USERS = 'users';

const getUserID = () => firebase.auth().currentUser.uid;

const resetUserData_production_mode = async () => {
    try {
        const docRef = await db.collection(USERS).doc(getUserID()).set({
        // logged: 0,
        // userId: 1,
        avatarSrc: "/assets/profil.png",
        avatarAlt: "Avatar",
        name: "Jan",
        surname: "Kowalski",
        nick: "Kowal",
        email: "jankowalski@gmail.com",
        location: "Wałbrzych",
        description: "Testowy opis",
        peopleObs: [
            {
                id: 1,
                name: "Tomasz Żukwowski",
                imgUrl: "/assets/profil.PNG"
              },
      
              {
                id: 2,
                name: "Damina Karbowiak",
                imgUrl: "/assets/profil.PNG"
              },
        ],
        skills: [],
        category: [
            {
                id: 1,
                name: "IT"
            },
            {
                id: 2,
                name: "Kosmos"
            },
        ], 
        links: [
            {
                id: 1,
                name: "github.com"
            }
        ]
    });
        console.log(docRef);

    } catch(err) {
        console.log(err)
    }
    
}


const fetchDataRealTime = (onChange) => {
    db.collection(USERS)
    .doc(getUserID())
    .onSnapshot((querySnapshot) => {
        // console.log("users")
        // console.log(querySnapshot.data())
        onChange({ ...querySnapshot.data(), userId: getUserID()});
    });
}

export {
    getUserID,
    resetUserData_production_mode,
    fetchDataRealTime
}