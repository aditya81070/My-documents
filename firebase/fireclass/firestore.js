var config = {
  apiKey: "AIzaSyBsQVQxhw92EyNtG7Pv2GK1bgc0I0Knw-Y",
  authDomain: "firestore-e996e.firebaseapp.com",
  databaseURL: "https://firestore-e996e.firebaseio.com",
  projectId: "firestore-e996e",
  storageBucket: "firestore-e996e.appspot.com",
  messagingSenderId: "358755769695"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();
const docRef = firestore.doc("samples/sandwichDat");

//Get Elements
const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#latestHotDogStatus");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");

saveButton.addEventListener("click", function() {

  const textToSave = inputTextField.value;
  console.log("I am going to save " + textToSave + " to Firestore");
  docRef.set({
    hotDogStatus: textToSave
  }).then(function() {
    console.log("Status Saved");
  }).catch(function(error) {
    console.log("Got an error:", error);
  });

  loadButton.addEventListener("click", function() {
    docRef.get().then(function(doc) {
      if (doc && doc.exists) {
        const myData = doc.data();
        outputHeader.innerText = "Hot dog Status: " + myData.hotDogStatus;
      }
    }).catch(function(error) {
      cosole.log("Got an error:", error.message);
    });
  });


  getRealtimeUpates = function() {
    docRef.onSnapshot(function(doc) {
      if (doc && doc.exists) {
        const myData = doc.data();
        outputHeader.innerText = "Hot dog Status: " + myData.hotDogStatus;
      }
    });
  }

  getRealtimeUpates();



});