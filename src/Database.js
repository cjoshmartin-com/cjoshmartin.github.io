// Database
import * as firebase from 'firebase';
class Database{
  static init(){
    firebase.initializeApp({
      apiKey: "AIzaSyBDkYL7SPL_rERsHW6cvVP6WwdE352iujY",
      authDomain: "cjoshmartin-f652e.firebaseapp.com",
      databaseURL: "https://cjoshmartin-f652e.firebaseio.com",
      projectId: "cjoshmartin-f652e",
      storageBucket: "cjoshmartin-f652e.appspot.com",
      messagingSenderId: "277001799380"
      });
  }
}

export default Database;
