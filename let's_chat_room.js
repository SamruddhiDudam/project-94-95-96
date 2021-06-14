// FIREBASE LINKS 
var firebaseConfig = {
    apiKey: "AIzaSyDvUmYtop1JCdgeW2yhBIz_c68MADHGcNo",
    authDomain: "tic-tac-toe-game-41729.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-game-41729-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-game-41729",
    storageBucket: "tic-tac-toe-game-41729.appspot.com",
    messagingSenderId: "462544039753",
    appId: "1:462544039753:web:d37322b9568f6f0e583498",
    measurementId: "G-TP06VYKHL0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME" + user_name + "!"


function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
