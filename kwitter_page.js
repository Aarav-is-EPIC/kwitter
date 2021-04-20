
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

  user_name = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");

   function send(){
       msg = document.getElementById("msg").value;
       console.log(msg);
       firebase.database().ref(room_name).push({
           person:user_name,
           message:msg,
           like:0
        });
        document.getElementById("msg").value = "";
   }
   function getData() 
   { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
   { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
   { childKey = childSnapshot.key; childData = childSnapshot.val(); 
    if(childKey != "AI") 
   { firebase_message_id = childKey; 
    message_data=childData;
    console.log(firebase_message_id);
    console.log(message_data);

    name_user = message_data["person"];
    message = message_data["message"];
    like = message_data["like"];
    console.log(name_user,message,like);

    name_with_tag = "<h4>"+ name_user + "<img class='user_tick' src='tick.png'> </h4>";
    message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
    likebutton = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='update_like(this.id)'>";
    spantag = "<span class='glyhpicon glyphicon-thumbs-up'>Like:" + like + "</span></button>";
    row = name_with_tag + message_with_tag + likebutton + spantag;
    document.getElementById("output").innerHTML +=row;
} }); }); } getData();
function update_like(message_id){
    console.log("click on the message id"+ message_id);
    likes = document.getElementById(message_id).value;
    updatedlikes = Number(likes) + 1;
    console.log(updatedlikes);

    firebase.database().ref(room_name).child(message_id).update({
        like:updatedlikes
    });

}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location.replace("index.html")
}





