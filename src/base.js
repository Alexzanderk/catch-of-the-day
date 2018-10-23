import Rebase from 're-base';
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5-L93lZTV0l5bx3DwklRbNZPdpLLHKoU",
    authDomain: "catch-of-the-day-alexzanderk.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-alexzanderk.firebaseio.com"
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;