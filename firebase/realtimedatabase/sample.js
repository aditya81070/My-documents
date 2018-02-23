// Initialize Firebase
var config = {
  apiKey: "AIzaSyDnpDweUtJeAx_QwDvtkzPuA7as217LuWM",
  authDomain: "fir-web-213dc.firebaseapp.com",
  databaseURL: "https://fir-web-213dc.firebaseio.com",
  projectId: "fir-web-213dc",
  storageBucket: "fir-web-213dc.appspot.com",
  messagingSenderId: "1071080504468"
};
firebase.initializeApp(config);
// Get a reference to the database service
var db = firebase.database();

add_data = document.getElementById("add_data");



add_data.addEventListener('click', function() {
  var userid = "1";
  var name = 'aditya';
  var email = 'aditya@gmail.com';
  db.ref('users/' + userid).set({
    username: name,
    email: email
  });
});