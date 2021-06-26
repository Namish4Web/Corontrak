function done() {
    firebase.database().ref('-McnY6zYgiieeXBqwg9X/Country').once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("total").innerHTML = clildSnapshot.val();
      // ...
    });
  });
 }
  
