import firebase,  { db } from './db.js';

const USERS = 'users';

const getUserID = () => firebase.auth().currentUser.uid;

const resetUserData_production_mode = async () => {
    try {
        const docRef = await db.collection(USERS).doc(getUserID()).set({
        logged: 0,
        userId: 1,
        avatarSrc: "/assets/profil.png",
        avatarAlt: "Avatar",
        name: "Jan",
        surname: "Kowalski",
        nick: "Kowal",
        email: "jankowalski@gmail.com",
        location: "Wałbrzych",
        description: "Testowy opis",
        ad: [
            // {
            //     id: 1,
            //     path: "/ad-settings",
            //     imgSrc: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
            //     imgAlt: "Testowe ogłoszenie",
            //     header: "Testowe ogłoszenie",
            //     category: "Test",
            //     desc: "Coś tam sobie zrobię",
            //     location: ""
            // },
            // {
            //     id: 2,
            //     path: "/ad-settings",
            //     imgSrc: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
            //     imgAlt: "Testowe ogłoszenie",
            //     header: "Szukam Tomka",
            //     category: "Wpierdziel",
            //     desc: "Tomek gdzie jesteś?",
            //     location: ""
            // },
            

        ],
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
        skills: [
            {
                id: 1,
                name: "JS"
            },
            {
                id: 2,
                name: "C++"
            },
            {
                id: 3,
                name: "JS"
            },
            {
                id: 4,
                name: "C++"
            },
            {
                id: 5,
                name: "JS"
            },
            {
                id: 6,
                name: "C++"
            },
            {
                id: 7,
                name: "C++"
            },
            {
                id: 8,
                name: "JS"
            },
            {
                id: 9,
                name: "C++"
            },
            {
                id: 10,
                name: "C++"
            },
            {
                id: 11,
                name: "C++"
            },
            {
                id: 12,
                name: "JS"
            },
            {
                id: 13,
                name: "C++"
            },
            {
                id: 14,
                name: "C++"
            },
            {
                id: 15,
                name: "C++"
            },
            {
                id: 16,
                name: "JS"
            },
            {
                id: 17,
                name: "C++"
            },
        ],
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


export {
    getUserID,
    resetUserData_production_mode
}