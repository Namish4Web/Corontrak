 /** function meet() {
				window.location.href="meet.html";
} **/
function cases() {
				var errorName = Math.floor((Math.random() * 10000000000000000000) + 1);
				var error = ", Fake cases";
				var reporter = firebase.database();
  var newPostKey = firebase.database().ref().child('issues').push().key;
reporter.ref("issues").push(errorName + error);
alert("Successfully reported your issue with code " +errorName + ". We may ask you for the request code so please keep it with you.");
}

function deaths() {
				var errorName = Math.floor((Math.random() * 10000000000000000000) + 1);
				var error = ", Fake deaths";
				var reporter = firebase.database();
				
  var newPostKey = firebase.database().ref().child('issues').push().key;
reporter.ref("issues").push(errorName + error);
alert("Successfully reported your issue with code " +errorName + ". We may ask you for the request code so please keep it with you.");
}

function lateUpdate() {
				var errorName = Math.floor((Math.random() * 10000000000000000000) + 1);
				var error = ", Doesn't update at expected time";
				var reporter = firebase.database();
  var newPostKey = firebase.database().ref().child('issues').push().key;
reporter.ref("issues").push(errorName + error);
alert("Successfully reported your issue with code " +errorName + ". We may ask you for the request code so please keep it with you.");
}


function change() {
				window.location.href="started.html";
}

document.getElementById("coronVideo").onmousedown = function(event) {
    return false;
}

function done() {
 document.getElementById("franceBoundary").style.transform = "translateY(-144px)";
 
firebase.database().ref('LastUpdate').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("date").innerHTML = document.getElementById("date").innerHTML + childSnapshot.val();
 
    });
  });
  firebase.database().ref('-McnY6zYgiieeXBqwg9X').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("indiaCountry").innerHTML = document.getElementById("indiaCountry").innerHTML + childSnapshot.val();
 
    });
  });
  firebase.database().ref('-MdAAvFhCGiwrF6dAQjo').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("indiaCases").innerHTML = document.getElementById("indiaCases").innerHTML + childSnapshot.val();
      
    });
  });
  firebase.database().ref('-MdABNiW9UN-lWj3cgXO').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("indiaDeaths").innerHTML = document.getElementById("indiaDeaths").innerHTML + childSnapshot.val();
      
    });
  });
  firebase.database().ref('-MdAC73v10Fe5CA-D7P_').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("indiaRecover").innerHTML = document.getElementById("indiaRecover").innerHTML + childSnapshot.val();
      
    });
  });
  
  firebase.database().ref('-MdASB9_p_LnMaRXO09Y').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("indiaToday").innerHTML = document.getElementById("indiaToday").innerHTML + childSnapshot.val();
      
    });
  });
  firebase.database().ref('-MdASCnKAbmrYDOoWEHf').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("indiaTodayDeath").innerHTML = document.getElementById("indiaTodayDeath").innerHTML + childSnapshot.val();
      
    });
  });
 
 firebase.database().ref('-MdAoaoyDazjSjvjXMmM').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("usCountry").innerHTML = document.getElementById("usCountry").innerHTML + childSnapshot.val();
      
    });
  });
  
  firebase.database().ref('-MdAprraKkTAeOC0h3KM').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("usCases").innerHTML = document.getElementById("usCases").innerHTML + childSnapshot.val();
      
    });
  });
  
  firebase.database().ref('-MdApwQbXZ-VjsSpNtWs').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("usDeaths").innerHTML = document.getElementById("usDeaths").innerHTML + childSnapshot.val();
      
    });
  });
  
  firebase.database().ref('-MdApzAHA3_AEbZiZdl4').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("usRecover").innerHTML = document.getElementById("usRecover").innerHTML + childSnapshot.val();
      
    });
  });
  
  firebase.database().ref('-MdArRxlQUlZj3j6A0ye').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("usToday").innerHTML = document.getElementById("usToday").innerHTML + childSnapshot.val();
     
    });
  });
  
  firebase.database().ref('-MdArT-pBJZHxYv9hfl_').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("usTodayDeath").innerHTML = document.getElementById("usTodayDeath").innerHTML + childSnapshot.val();
      
    });
  });
  firebase.database().ref('-MdBg5Jd6v0OQ4wTpkTO').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("brazilCountry").innerHTML = document.getElementById("brazilCountry").innerHTML + childSnapshot.val();
      
     
    });
  });
  
  firebase.database().ref('-MdBgPktOikUARvk3PHc').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("brazilCases").innerHTML = document.getElementById("brazilCases").innerHTML + childSnapshot.val();
      
     
    });
  });
  
  firebase.database().ref('-MdBgUZtxmgUmLwqDjUe').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("brazilDeaths").innerHTML = document.getElementById("brazilDeaths").innerHTML + childSnapshot.val();
      
     
    });
  });
  
  firebase.database().ref('-MdBg_V7yU6_9jXtaS2P').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("brazilRecover").innerHTML = document.getElementById("brazilRecover").innerHTML + childSnapshot.val();
      
     
    });
  });
  
  firebase.database().ref('-MdBgjNmtU6_hN6oxRsZ').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("brazilToday").innerHTML = document.getElementById("brazilToday").innerHTML + childSnapshot.val();
      
     
    });
  });
  
  firebase.database().ref('-MdBgrJAzXFXvx0DyOAo').once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      document.getElementById("brazilTodayDeath").innerHTML = document.getElementById("brazilTodayDeath").innerHTML + childSnapshot.val();
      var fadeTarget = document.getElementById("prog");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 2;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.6;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
 document.getElementById("detail").style.transform = "translateY(-34px)"; 
 
    });
  });
  return true;
}
function download() {
  window.location.href = "https://corontrak.web.app/Corontrak.apk";
  return true;
}

function solver() {
  window.location.href = "queries.html";
  return true;
  
}
 
 
function refresh() {
				var x = document.getElementById('prog');
  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
  }
  window.location.href="index.html";
}











