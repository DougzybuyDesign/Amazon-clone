import firebase from "firebase";

// import config from "./config.json";
// import landing from "./landing.json";
// import speakers from "./speakers.json";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCT1pDJDJPiuW65JIslklFDAWKeDqQMPe8",
  authDomain: "clone-1c9db.firebaseapp.com",
  projectId: "clone-1c9db",
  storageBucket: "clone-1c9db.appspot.com",
  messagingSenderId: "353564135987",
  appId: "1:353564135987:web:1b85519da8ad855d160946",
  measurementId: "G-7JS9LQF5FS"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

var db = firebase.firestore();
var storage = firebase.storage();
db.collection("speakers")
  .get()
  .then((docs) => {
    docs.forEach((doc) => {
      var data = doc.data();
      Object.keys(data).forEach(function (key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        if (
          typeof data[key] === "object" &&
          data[key].constructor.name === "DocumentReference"
        ) {
          console.log(data[key].parent.id);
        }
      });
    });
  });

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIGpnhJr2OlhSYa7ethhonc-OTW9VhoVA",
  authDomain: "clone-1e5f0.firebaseapp.com",
  databaseURL: "https://clone-1e5f0.firebaseio.com",
  projectId: "clone-1e5f0",
  storageBucket: "clone-1e5f0.appspot.com",
  messagingSenderId: "706546941030",
  appId: "1:706546941030:web:c9e4fb6a540b21ce23c1a7",
  measurementId: "G-JSF4K0QH4G"
});

const auth = firebase.auth();

export { db, auth };
