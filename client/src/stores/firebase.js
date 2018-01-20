import firebase from 'firebase';
//

const config = {
	apiKey: process.env.API_KEY,
  authDomain: "fitness-app-66633.firebaseapp.com",
  databaseURL: "https://fitness-app-66633.firebaseio.com",
  projectId: "fitness-app-66633",
  storageBucket: "fitness-app-66633.appspot.com",
  messagingSenderId: "264531720702"
}

console.log(__filename)
console.log(process.env.REACT_APP_TEST)

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = new firebase.auth();
export const database = new firebase.database();
export default firebase;

