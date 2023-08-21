const firebaseConfig = {
    apiKey: "AIzaSyCOuT3fNEkSFwKhw-tuid2aEneG63o6j-A",
    authDomain: "kwitter-bf70e.firebaseapp.com",
    databaseURL: "https://kwitter-bf70e-default-rtdb.firebaseio.com",
    projectId: "kwitter-bf70e",
    storageBucket: "kwitter-bf70e.appspot.com",
    messagingSenderId: "664324081171",
    appId: "1:664324081171:web:48eeb03132f913bb8d61e6",
    measurementId: "G-65HGNVXPJ6"
  };
  function getData() {
    firebase.database().ref("/"+room_name).on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key; childData = childSnapshot.val();
        if(childKey!= "purpose") {
          firebase_mesage_id = childKey;
          message_data = childData;
  }
     })
        })
      }
      getData();

      function updateLike(message_id)
{
  console.log("clicou no botão Curtidas - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }