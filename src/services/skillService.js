import { db } from './db.js';
import * as UserService from './userService.js';

import firebase from 'firebase/app'

const SKILLS = 'skills';


const fetchDataRealTime = (onChange) => {
    db.collection(SKILLS)
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

// { name: name}
const add = (payload, success = () => {}, err = () => {}) => {
    db.collection(SKILLS)
    .set(payload)
    .then((data) => {
        success(data)
    })
    .catch((error) => {
        console.log(error)
        err(error.message);
    });


}

const getSkillId = async name => {
    const data = await db.collection(SKILLS).where("name", "==", name).get();
    if(data.length>0) return data[0].id;
    else return false;
}







export {
    fetchDataRealTime,
    add,
}