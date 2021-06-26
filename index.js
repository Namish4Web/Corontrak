 function done() {		firebase.database().ref('-McnY6zYgiieeXBqwg9X/Country').once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("total").innerHTML = clildSnapshot.val();
      // ...
    });
  });
 }
 function download() {
  window.location.href="https://corontrak.web.app/Corontrak.apk";
  }
  
  function solver() {
  				window.location.href="https://corontrak.web.app/queries.html";
  }
