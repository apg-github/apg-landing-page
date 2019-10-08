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

(function() {
  let cursor = true;
  const speed = 650;
  setInterval(() => {
    if (cursor) {
      document.getElementById("cursor").style.opacity = 0;
      cursor = false;
    } else {
      document.getElementById("cursor").style.opacity = 0.5;
      cursor = true;
    }
  }, speed);
})();
