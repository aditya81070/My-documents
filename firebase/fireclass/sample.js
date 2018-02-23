// Initialize Firebase
var config = {
  apiKey: "AIzaSyBsQVQxhw92EyNtG7Pv2GK1bgc0I0Knw-Y",
  authDomain: "firestore-e996e.firebaseapp.com",
  databaseURL: "https://firestore-e996e.firebaseio.com",
  projectId: "firestore-e996e",
  storageBucket: "firestore-e996e.appspot.com",
  messagingSenderId: "358755769695"
};
firebase.initializeApp(config);



//Including firestore

db = firebase.firestore();

const googleLogin = document.getElementById("googleLogin");
const facebookLogin = document.getElementById("facebookLogin");
const phoneNumber = document.getElementById("phoneNumber");
const signinbutton = document.getElementById("signinbutton");
const shownumber = document.getElementById("shownumber");

// Add a new document in collection "cities"
// db.collection("cities").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   })
//   .then(function() {
//     console.log("Document successfully written!");
//   })
//   .catch(function(error) {
//     console.error("Error writing document: ", error.message);
//   });
// var cityRef = db.collection('cities').doc('BJ');
//
// var setWithMerge = cityRef.set({
//   capital: true,
//   state: "Newyork City",
//   phone: 8107099528
// }, {
//   merge: true
// });
//
// var docData = {
//   stringExample: "Hello world!",
//   booleanExample: true,
//   numberExample: 3.14159265,
//   dateExample: new Date("December 10, 1815"),
//   arrayExample: [5, true, "hello"],
//   nullExample: null,
//   objectExample: {
//     a: 5,
//     b: {
//       nested: "foo"
//     }
//   }
// };
// db.doc('cities/Datatypes').set(docData).then(function() {
//     console.log("Document successfully written!");
//   })
//   .catch(function(error) {
//     console.log("error loading " + error.message);
//   });
//
// db.doc('cities/Datatypes').delete().catch(function(error) {
//   console.log("there is an error " + error.message);
// });
//
// // transactions
//
// // Create a reference to the SF doc.
// var sfDocRef = db.collection("cities").doc("SF");
//
// // Uncomment to initialize the doc.
// // sfDocRef.set({ population: 0 });
//
// db.runTransaction(function(transaction) {
//   // This code may get re-run multiple times if there are conflicts.
//   return transaction.get(sfDocRef).then(function(sfDoc) {
//     console.log(sfDoc.data());
//     var newPopulation = sfDoc.data().population + 1;
//     transaction.update(sfDocRef, {
//       population: newPopulation
//     });
//   });
// }).then(function() {
//   console.log("Transaction successfully committed!");
// }).catch(function(error) {
//   console.log("Transaction failed: ", error);
// });
//
//
// // Create a reference to the SF doc.
// var sfDocRef = db.collection("cities").doc("SF");
//
// db.runTransaction(function(transaction) {
//   return transaction.get(sfDocRef).then(function(sfDoc) {
//     var newPopulation = sfDoc.data().population + 1;
//     if (newPopulation <= 1000) {
//       transaction.update(sfDocRef, {
//         population: newPopulation
//       });
//       return newPopulation;
//     } else {
//       return Promise.reject("Sorry! Population is too big.");
//     }
//   });
// }).then(function(newPopulation) {
//   console.log("Population increased to ", newPopulation);
// }).catch(function(err) {
//   // This will be an "population is too big" error.
//   console.error(err);
// });
//
// var batch = db.batch();
//
// var nycRef = db.doc("cities/NYC");
// batch.set(nycRef, {
//   name: "New York City"
// });
//
// // Update the population of 'SF'
// var sfRef = db.collection("cities").doc("SF");
// batch.update(sfRef, {
//   "population": 1000000
// });
//
// // Delete the city 'LA'
// var laRef = db.collection("cities").doc("LA");
// batch.delete(laRef);
//
// // Commit the batch
// batch.commit().then(function() {
//     // ...
//     console.log("batch is committed successfully");
//   })
//   .then(function(error) {
//     console.log("This is an commit error " + error);
//   });
//
// db.doc("cities/SF").delete().then(function() {
//   console.log("Document successfully deleted!");
// }).catch(function(error) {
//   console.error("Error removing document: ", error);
// });
//
//
//
//
//
//
//
// //Google Sign In with pop - up and signInWithRedirect
//
// // googleLogin.addEventListener('click', function() {
// //   var provider = new firebase.auth.GoogleAuthProvider();
// //   provider.setCustomParameters({
// //     'login_hint': 'user@example.com'
// //   });
// //   // For redirect use this function
// //   //  firebase.auth().signInWithRedirect(provider);
// //
// //   firebase.auth().signInWithPopup(provider).then(function(result) {
// //     // This gives you a Google Access Token. You can use it to access the Google API.
// //     var token = result.credential.accessToken;
// //     // The signed-in user info.
// //     var user = result.user;
// //     console.log(user);
// //     console.log(token);
// //   }).catch(function(error) {
// //     // Handle Errors here.
// //     var errorCode = error.code;
// //     var errorMessage = error.message;
// //     // The email of the user's account used.
// //     var email = error.email;
// //     // The firebase.auth.AuthCredential type that was used.
// //     var credential = error.credential;
// //     // ...
// //     console.log("this is an error");
// //     console.log(errorMessage);
// //     console.log(email);
// //   });
// // });
//
// // //Facebook Login
// facebookLogin.addEventListener('click', function() {
//   var provider = new firebase.auth.FacebookAuthProvider();
//   provider.setCustomParameters({
//     'display': 'popup'
//   });
//
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//     console.log(user);
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//     console.log(error.message);
//   });
// });
//
// //Login with Mobile phoneNumber
//
// signinbutton.addEventListener('click', function() {
//   console.log(phoneNumber.value);
//   firebase.auth().languageCode = 'en';
//   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('signinbutton', {
//     'size': 'invisible',
//     'callback': function(response) {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       //onSignInSubmit();
//     }
//   });
//   var appVerifier = window.recaptchaVerifier;
//   firebase.auth().signInWithPhoneNumber(phoneNumber.value, appVerifier)
//     .then(function(confirmationResult) {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//     }).catch(function(error) {
//       // Error; SMS not sent
//       console.log("this is error " + error.message);
//       shownumber.innerText = phoneNumber.value;
//
//       // ...
//     });
//
// });




var citiesRef = db.collection("cities");

citiesRef.doc("SF").set({
  name: "San Francisco",
  state: "CA",
  country: "USA",
  capital: false,
  population: 860000
});
citiesRef.doc("LA").set({
  name: "Los Angeles",
  state: "CA",
  country: "USA",
  capital: false,
  population: 3900000
});
citiesRef.doc("DC").set({
  name: "Washington, D.C.",
  state: null,
  country: "USA",
  capital: true,
  population: 680000
});
citiesRef.doc("TOK").set({
  name: "Tokyo",
  state: null,
  country: "Japan",
  capital: true,
  population: 9000000
});
citiesRef.doc("BJ").set({
  name: "Beijing",
  state: null,
  country: "China",
  capital: true,
  population: 21500000
});



// var docRef = db.doc("cities/SF");
// docRef.get().then(function(doc) {
//   if (doc.exists) {
//     console.log("Document data ", doc.data());
//   } else {
//     console.log("No such Document!");
//   }
// }).catch(function(error) {
//   console.log("error getting document: ", error);
// });
//
//
// db.collection("cities").where("capital", "==", true)
//   .get()
//   .then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       console.log(doc.id, " => ", doc.data());
//
//       for (key in doc.data()) {
//         console.log(key + ":" + doc.data()[key]);
//       }
//     })
//   })
//   .catch(function(error) {
//     console.log("Error getting documents: ", error);
//   });
//
//
//
// db.collection("cities").get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//     console.log(doc.id, " => ", doc.data());
//   });
// });
//



// db.collection("cities").doc("SF")
//   .onSnapshot(function(doc) {
//     console.log("Current data: ", doc && doc.data());
//   });

db.collection("cities").doc("SF")
  .onSnapshot(function(doc) {
    var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(source, " data: ", doc && doc.data());
  });


db.collection("cities").where("state", "==", "CA")
  .onSnapshot(function(querySnapshot) {
    var cities = [];
    querySnapshot.forEach(function(doc) {
      cities.push(doc.data().name);
    });
    console.log("Current cities in CA: ", cities.join(", "));
  });



db.collection("cities").where("state", "==", "CA")
  .onSnapshot(function(snapshot) {
    snapshot.docChanges.forEach(function(change) {
      if (change.type === "added") {
        console.log("New city: ", change.doc.data());
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
      }
      if (change.type === "removed") {
        console.log("Removed city: ", change.doc.data());
      }
    });
  });

//Here we start to query

// Create a reference to the cities collection


// Create a query against the collection.
// var query = citiesRef.where("state", "==", "CA");
// console.log("this is query" + query);
var x = citiesRef.orderBy("name").limit(3);
var x = citiesRef.orderBy("population").startAt(1000000);

x.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    console.log(doc.id, " => ", doc.data());
  });

}).catch(function(error) {
  console.log("this is an errror", error);
});