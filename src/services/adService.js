import firebase,  { db } from './db.js';

const AD = 'ad';

const add = async (payload) => {
    try {
        const docRef = await db.collection(AD).add(payload);
        console.log(docRef);
        return docRef.id;

    } catch(err) {
        console.log(err)
        return err;
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
    fetchDataRealTime
}