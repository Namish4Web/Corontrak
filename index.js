function done() {
  firebase.database().ref('-McnY6zYgiieeXBqwg9X').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("total").innerHTML = document.getElementById("total").innerHTML + childSnapshot.val();
    });
  });
}
function download() {
  window.location.href = "https://corontrak.web.app/Corontrak.apk";
}

function solver() {
  window.location.href = "https://corontrak.web.app/queries.html";
}
