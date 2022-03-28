import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//seed the database

//config
const config = {
  apiKey: 'AIzaSyBWz9Tty12-KeB10CH9hUhwrqT8j8Fna88',
  authDomain: 'netflix-clone-2c77b.firebaseapp.com',
  projectId: 'netflix-clone-2c77b',
  storageBucket: 'netflix-clone-2c77b.appspot.com',
  messagingSenderId: '1079061709713',
  appId: '1:1079061709713:web:fb9ea7630b7363ec805030',
};

//Intiliaze firebase
const firebase = Firebase.initializeApp(config);
export { firebase };
