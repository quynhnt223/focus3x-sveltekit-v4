// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	// your Firebase config
	apiKey: 'AIzaSyAl2vsoCC7OmAI2jRTpwd09ft0t5eYMtks',
	authDomain: 'focus3xapp.firebaseapp.com',
	projectId: 'focus3xapp',
	storageBucket: 'focus3xapp.appspot.com',
	messagingSenderId: '8865150959',
	appId: '1:8865150959:web:39f86cb844a48e8aade81a',
	measurementId: 'G-V1HRGVE64L'
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, storage, auth };
