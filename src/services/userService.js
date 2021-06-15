import firebaseAuth,  { db } from './db.js';
import firebase from 'firebase/app'

import * as AuthService from './authService.js';


const USERS = 'users';
const user = () => firebase.auth().currentUser;

const getUserID = () => user().uid;




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


const changePassword = (email, passOld, passNew, success = () => {}, err = () => {}) => {
AuthService.authUser(email, passOld, () => {
    user().updatePassword(passNew).then(() => {
        success()
      }).catch((error) => {
        console.log(err);
        err(error.messages)
      });
},
(err) => {
    err(err.messages)
})


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

const addObs = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        peopleObs: firebase.firestore.FieldValue.arrayUnion(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}


const remObs = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        peopleObs: firebase.firestore.FieldValue.arrayRemove(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}


const addObsAd = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        adObs: firebase.firestore.FieldValue.arrayUnion(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}


const remObsAd = (payload, success = () => {}, err = () => {}) => {
    db.collection(USERS)
    .doc(getUserID())
    .update({
        adObs: firebase.firestore.FieldValue.arrayRemove(payload)
    })
    .then((data) => {
        success(data)
    })
    .catch(err => {
        console.log(err);
        err(err)
    });
}




export {
    getUserID,
    // resetUserData_production_mode,
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
    fetchAllUsersRealTime,
    addObs,
    remObs,
    addObsAd,
    remObsAd
}