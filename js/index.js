  var firebaseConfig = 
  {
    apiKey: "AIzaSyAPF6hXcHeJnTFEq3qe10fGE7eEbrxvHgI",
    authDomain: "fir-wepapp-2864a.firebaseapp.com",
    databaseURL: "https://fir-wepapp-2864a.firebaseio.com",
    projectId: "fir-wepapp-2864a",
    storageBucket: "fir-wepapp-2864a.appspot.com",
    messagingSenderId: "872924508567",
    appId: "1:872924508567:web:4590cb932239e28f1854d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  $("#btn-login").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();
  })
