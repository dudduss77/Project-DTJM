import firebase,  { db } from './db.js';

const CATEGORIES = 'categories';

const addCategory = async (payload) => {
    try {
        const docRef = await db.collection(CATEGORIES).add(payload);
        console.log(docRef);
        return docRef.id;

    } catch(err) {
        console.log(err)
        return err;
    }
    
}


const getAllCategories = async (payload) => {
    try {
        const docRef = await db.collection(CATEGORIES).add(payload);
        console.log(docRef);
        return docRef.id;

    } catch(err) {
        console.log(err)
        return err;
    }
    
}


const fetchDataRealTime = (onChange) => {
    db.collection(CATEGORIES)
    .onSnapshot((querySnapshot) => {
        var data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                name: doc.data().name,
                icon: doc.data().icon
            });
        });
        onChange(data);
    });
}





export {
    addCategory,
    getAllCategories,
    fetchDataRealTime
}