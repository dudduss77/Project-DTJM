import firebase,  { db } from './db.js';

const AD = 'ad';

const add = async (payload, success = () => {}, error = () => {}) => {
    try {
        const docRef = await db.collection(AD).add(payload);
        console.log(docRef);
        success(docRef.id)
        return docRef.id;

    } catch(err) {
        console.log(err)
        error(err)
        return err;
    }
    
}


const update = async (id, payload, success = () => {}, error = () => {}) => {
    try {
        const docRef = await db.collection(AD).doc(id).update(payload);
        success(docRef)

    } catch(err) {
        console.log(err)
        error(err)
        // return err;
    }
    
}



const fetchDataRealTime = (onChange) => {
    db.collection(AD)
    .onSnapshot((querySnapshot) => {
        var data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                ...doc.data()
            });
        });
        onChange(data);
    });
}





export {
    add,
    fetchDataRealTime, 
    update
}