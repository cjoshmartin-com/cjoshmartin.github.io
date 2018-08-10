// Database
import rebase   from 're-base'
import firebase from 'firebase/app'
require("firebase/database");

    const app = firebase.initializeApp({
      apiKey: "AIzaSyBDkYL7SPL_rERsHW6cvVP6WwdE352iujY",
      authDomain: "cjoshmartin-f652e.firebaseapp.com",
      databaseURL: "https://cjoshmartin-f652e.firebaseio.com",
      projectId: "cjoshmartin-f652e",
      storageBucket: "cjoshmartin-f652e.appspot.com",
      messagingSenderId: "277001799380"
      });

const db = firebase.database(app)
export default rebase.createClass(db)
