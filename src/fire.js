import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAfv-IVF8D5U-Lhd-P2u_IAsP4eGgbik68",
  authDomain: "placement-site-39f91.firebaseapp.com",
  databaseURL: "https://placement-site-39f91.firebaseio.com",
  projectId: "placement-site-39f91",
  storageBucket: "placement-site-39f91.appspot.com",
  messagingSenderId: "986866368164",
  appId: "1:986866368164:web:f500574f99f5d9658f7031",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const docRef = firestore.doc("users/profiles");
const outputHeader = document.querySelector("anything");
const inputTextField = document.querySelector("textfeild");
const saveButton = document.querySelector("savebutton");
/*
saveButton.addEventListener("click", function () {
  const textToSave = inputTextField.value;
  docRef
    .set({
      name: textToSave,
    })
    .then(function () {
      console.log("status saved");
    })
    .catch(function (error) {
      console.log("Got an error", error);
    });
});
savebutton.getRealtimeUpdate = function () {
  docRef.onSnapshot(function (doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      outputHeader.innerText = "this is name:" + myData.Status;
    }
  });
};*/
export default fire;
