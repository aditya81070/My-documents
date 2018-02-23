(function() {
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

  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  // Add Login event
  loginBtn.addEventListener('click', e => {
    //Get email and  password
    const email = loginEmail.value;
    const password = loginPassword.value;
    const auth = firebase.auth();

    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

  });


  //Add signup event

  signupBtn.addEventListener('click', e => {
    //Get email and  password
    const email = loginEmail.value;
    const password = loginPassword.value;
    const auth = firebase.auth();

    //Sign up
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

  });


  logoutBtn.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  //Add a realtime addEventListener

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      logoutBtn.classList.remove('hide');
      loginBtn.classList.add('hide');
      signupBtn.classList.add('hide');
    } else {

      console.log("not logged in ");
      logoutBtn.classList.add('hide');
      loginBtn.classList.remove('hide');
      signupBtn.classList.remove('hide');
    }
  })

}());