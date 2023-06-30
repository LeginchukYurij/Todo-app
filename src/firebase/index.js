import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDRHqG0w4zTpLLz-fE6MX8a20XFlC9Abzc',
  authDomain: 'todoapp-25984.firebaseapp.com',
  projectId: 'todoapp-25984',
  storageBucket: 'todoapp-25984.appspot.com',
  messagingSenderId: 1022387224384,
  appId: '1:1022387224384:web:8fb940893374c51be304a5',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
