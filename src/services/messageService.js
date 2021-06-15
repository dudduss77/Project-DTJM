import { db } from './db.js';
import * as UserService from './userService.js';

import firebase from 'firebase/app'

const MESSAGES = 'messages';


const fetchDataRealTime = (onChange) => {
    db.collection(MESSAGES)
    .doc('users')
    .collection(UserService.getUserID())
    .onSnapshot((querySnapshot) => {
        var data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                ...(doc.data())
            });
        });
        onChange(data);
    });
}


const add = (id, payload, success = () => {}) => {
    db.collection(MESSAGES)
    .doc('users')
    .collection(UserService.getUserID())
    .doc(id)
    .update({
        content: firebase.firestore.FieldValue.arrayUnion(payload)
    })
    .then((data) => {
        payload.fromYou = false;

        db.collection(MESSAGES)
        .doc('users')
        .collection(id)
        .doc(UserService.getUserID())
        .update({
            content: firebase.firestore.FieldValue.arrayUnion(payload)
        })
        .then((data) => {
            success(data)
        });
    });


}


const addNew = (user, payload, success = () => {}, error = () => {}) => {
    // debugger
    db.collection(MESSAGES)
    .doc('users')
    .collection(UserService.getUserID())
    .doc(user.userId)
    .set({
        avatarSrc: user.avatarSrc,
        content: [payload],
        name: user.name + " " + user.surname
    })
    .then((data) => {
        payload.fromYou = false;
        db.collection(MESSAGES)
        .doc('users')
        .collection(user.userId)
        .doc(UserService.getUserID())
        .set({
            avatarSrc: user.avatarSrc,
            content: [payload],
            name: user.name + " " + user.surname
        })
        .then((data) => {
            success(data)
        })
        .catch(err => {
            console.log(err)
            error(err)
        });
    })
    .catch(err => {
        // debugger
        console.log(err)
        error(err)
    });


}







export {
    fetchDataRealTime,
    add,
    addNew
}