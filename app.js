import hideNav from "./navbarHide";

hideNav();

let i = 0;
let ted = "Travel corp!";
function writeText() {
  let speed = 100;
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

//! init on DOMLoad
document.addEventListener("DOMContentLoaded", init);

class Writerer {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

function init() {
  const txtElement = document.querySelector(".txt-type");

  const words = JSON.parse(txtElement.getAttribute("data-words"));

  const wait = txtElement.getAttribute("data-wait");

  new Writerer(txtElement, words, wait);
}

function renderGallery(imageNumber) {
  let gallery = document.querySelector(".gallery");

  for (let i = 0; i < imageNumber; i++) {
    fetch(`https://picsum.photos/600/480`)
      .then(response => {
        let photo = document.createElement("div");
        photo.classList.add("fetched-div");

        photo.innerHTML = `<img class="gallery-image" src="${response.url}" alt="gallery image" />`;
        gallery.appendChild(photo);
      })
      .then(() => {
        //i == imageNumber - 1 ? $(".loading-fullpage").fadeOut(1000) : null;
      })
      .catch(err => {
        console.error(err);
        let photo = document.createElement("div");
        photo.classList.add("fetched-div");
        let imgSrc = "../img/default.jpg";
        photo.innerHTML = `<img class="gallery-image" src=${imgSrc} alt="gallery image" />`;
        gallery.appendChild(photo);
      })
      .then(() => {
        //i == imageNumber - 1 ? $(".loading-fullpage").fadeOut(1000) : null;
      });
  }
}
(function() {
  renderGallery(4);
  $(".loading-fullpage").fadeOut(1000);
})();

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //console.log(anchor);
    anchor.addEventListener("click", e => {
      e.preventDefault();

      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
