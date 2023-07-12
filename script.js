var rotated = 0;
var currentStatus = true; //true is heads, false is tails

function coinFlip() {
  var coin = document.getElementById("card");
  var outcome = Math.floor(Math.random() * 2);
  var outcomeDiv = document.getElementById("outcome");
  outcomeDiv.innerHTML = ""

  if (outcome == 1) {
    if (currentStatus) {
      rotated = rotated + 1800;
      coin.style.transform = "rotateY(" + rotated + "deg)";
    } else {
      rotated = rotated + 1980;
      coin.style.transform = "rotateY(" + rotated + "deg)";
      currentStatus = !currentStatus;
    }
  } else {
    if (currentStatus) {
      rotated = rotated + 1980;
      coin.style.transform = "rotateY(" + rotated + "deg)";
      currentStatus = !currentStatus;
    } else {
      rotated = rotated + 1800;
      coin.style.transform = "rotateY(" + rotated + "deg)";
    }
  }
  
  setTimeout(() => {
    showResult(); 
  }, 3000);
}

function showResult () {
  var outcomeDiv = document.getElementById("outcome");
  if (currentStatus) {
    outcomeDiv.innerHTML = "It's Heads!"
  } else {
    outcomeDiv.innerHTML = "It's Tails!"
  }
  
}
