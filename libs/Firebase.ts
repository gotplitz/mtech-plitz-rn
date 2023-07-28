import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAlWf2em5vKNrpxxiahol5K5o8owN7CSuU',
	authDomain: 'react-native-course-48f6c.firebaseapp.com',
	projectId: 'react-native-course-48f6c',
	storageBucket: 'react-native-course-48f6c.appspot.com',
	messagingSenderId: '35233089318',
	appId: '1:35233089318:web:c5a5de924ec2cbe936a3e7',
	measurementId: 'G-X80YEGK582',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
