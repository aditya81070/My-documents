(function() {




  const config = {
    apiKey: "AIzaSyAxMBoS1IIsDcaAXW0GUBDsQIpoH2QwerQ",
    authDomain: "fireclass-72cc1.firebaseapp.com",
    databaseURL: "https://fireclass-72cc1.firebaseio.com",
    projectId: "fireclass-72cc1",
    storageBucket: "fireclass-72cc1.appspot.com",
    messagingSenderId: "285747530978"
  };
  firebase.initializeApp(config);

  //Get Elements
  const preObject = document.getElementById("object");
  const ulList = document.getElementById("List");

  //Create Refreneces
  const debRefObject = firebase.database().ref().child('object');
  const debRefList = debRefObject.child('Hobbies');


  //sync object changes
  debRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

  debRefList.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);
  });
  debRefList.on('child_changed', snap => {

    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
  });

  debRefList.on('child_removed', snap => {
    const liRemoved = document.getElementById(snap.key);
    liRemoved.remove();
  })


}());