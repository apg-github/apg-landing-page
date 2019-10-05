var i = 0;
var ted = "Exploited Explorers!";

function writeText() {
  let speed = 100; //! duration of effect
  if (i < ted.length) {
    document.querySelector("#name").innerHTML += ted.charAt(i);
    i++;
  }
  setTimeout(writeText, speed);
}

writeText();
