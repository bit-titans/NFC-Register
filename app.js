var file;
var count;
var firebaseConfig = {
    apiKey: "AIzaSyDnZbfxP4v9terWgJLM6xLbICO7VESE7FQ",
    authDomain: "nfc-hall-ticket.firebaseapp.com",
    databaseURL: "https://nfc-hall-ticket.firebaseio.com",
    projectId: "nfc-hall-ticket",
    storageBucket: "nfc-hall-ticket.appspot.com",
    messagingSenderId: "238550531651",
    appId: "1:238550531651:web:e0a9eb2c20d2f92e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  $('document').ready(function(){
    firebase.auth().signInWithEmailAndPassword("test@admin.com", "123456")
    const ref = firebase.database().ref('counter/value');
    ref.on('value',s=>{
        count = s.val();
    });
      $('#submit').click(e=>{
            const email = $('#email').val();
            const password = $('#password').val();
            const access = $('#access').find(":selected").text();
            const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
            promise.catch(e=>{alert(e.message);});
            firebase.database().ref('users/' + count).set({
                email: email,
                access: access
              });
              count = count+1;
            firebase.database().ref('counter/').set({value: count});
            document.getElementById('form').reset();
      });
  });