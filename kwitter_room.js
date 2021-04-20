
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDJWIPEkvGZEHtYO7z9z7BpcwGmxZ-5Uo8",
      authDomain: "kwitter-f535c.firebaseapp.com",
      databaseURL: "https://kwitter-f535c-default-rtdb.firebaseio.com",
      projectId: "kwitter-f535c",
      storageBucket: "kwitter-f535c.appspot.com",
      messagingSenderId: "658012113413",
      appId: "1:658012113413:web:501fc1b6ba96280215aa6c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");
    document.getElementById("h3user_name").innerHTML = "welcome " + username + "!";
    function addroom(){
          room_name = document.getElementById("room-name").value;
          console.log(room_name);
          localStorage.setItem("roomname",room_name);

          firebase.database().ref("/").child(room_name).update({
            AI:"HI"
      });
      window.location = "kwitter_page.html";
    }





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row="<div class='room_name' id= " + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}
