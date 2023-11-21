// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB1xNazULV7O9tfJUa6FtCGPQRVvCR4nlk',
	authDomain: 'react-apps-41cb8.firebaseapp.com',
	projectId: 'react-apps-41cb8',
	storageBucket: 'react-apps-41cb8.appspot.com',
	messagingSenderId: '423313740911',
	appId: '1:423313740911:web:e2a8e0a9d38939826ae99a',
	measurementId: 'G-0JKCE24RK6',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);

// const analytics = getAnalytics(app);
