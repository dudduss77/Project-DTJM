import firebaseAuth,  { db } from './db.js';
import firebase from 'firebase/app'


const USERS = 'users';
const user = () => firebase.auth().currentUser;

const getUserID = () => user().uid;

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
        onChange({ ...querySnapshot.data(), userId: getUserID()});
    });
}
// { fields to update }
const update = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update(payload)
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}
// { id: "uid"}
const addSkill = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        skills: firebase.firestore.FieldValue.arrayUnion(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}
// { id: "uid"}
const addCategory = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        category: firebase.firestore.FieldValue.arrayUnion(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}

// { id: "uid", name: "link"}
const addLink = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        links: firebase.firestore.FieldValue.arrayUnion(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}


// { id: "uid"}
const removeSkill = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        skills: firebase.firestore.FieldValue.arrayRemove(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}
// { id: "uid"}
const removeCategory = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        category: firebase.firestore.FieldValue.arrayRemove(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}

// { id: "uid", name: "link"}
const removeLink = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        links: firebase.firestore.FieldValue.arrayRemove(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}

const changeEmail = (email, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        email
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });

    user().updateEmail(email).then(() => {
        success()
      }).catch((error) => {
        console.log(err);
        err(err)
      });

}


const changePassword = (pass, success = () => {}, err = () => {}) => {

    user().updatePassword(pass).then(() => {
        success()
      }).catch((error) => {
        console.log(err);
        err(err)
      });

}

const deleteUser = ( success = () => {}, err = () => {}) => {
    user().delete().then(() => {
        success()
      }).catch((error) => {
        err(error)
      });
}


const fetchAllUsersRealTime = (onChange) => {
    db.collection(USERS)
    .onSnapshot((querySnapshot) => {
        var data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                userId: doc.id,
                ...(doc.data())
            });
        });
        onChange(data);
    });
}





export {
    getUserID,
    resetUserData_production_mode,
    fetchDataRealTime,
    update,
    addCategory,
    addLink,
    addSkill,
    removeLink,
    removeSkill,
    removeCategory,
    changeEmail,
    changePassword,
    deleteUser,
    fetchAllUsersRealTime
}