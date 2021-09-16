import * as firebase from 'firebase';
const firebaseConfig = {
   apiKey: "AIzaSyBo1Ym8YRj2d8iCsS4R8ohujwJK9Er03js",

   authDomain: "netflix-clone-dash-99f8f.firebaseapp.com",
 
   projectId: "netflix-clone-dash-99f8f",
 
   storageBucket: "netflix-clone-dash-99f8f.appspot.com",
 
   messagingSenderId: "23663533945",
 
   appId: "1:23663533945:web:457d4a12de7522803ad9a8"
 
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export { auth }