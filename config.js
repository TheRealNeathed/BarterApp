import firebase from 'firebase'

require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDeud2VRymNH7WzrdzWAmGidvzs-lA6ny0",
    authDomain: "barterapp-86f82.firebaseapp.com",
    projectId: "barterapp-86f82",
    storageBucket: "barterapp-86f82.appspot.com",
    messagingSenderId: "441886687147",
    appId: "1:441886687147:web:8c8346fa71471bfb991cee"
  };

  firebase.initializeApp(firebaseConfig)
  
  export default firebase.firestore()