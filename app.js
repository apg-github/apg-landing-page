import hideNav from "./navbarHide";

hideNav();

let i = 0;
let ted = "Travel corp!";
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
    //current index of word
    const current = this.wordIndex % this.words.length;
    //console.log(current); //! wtf
    //get full text of current word
    const fullTxt = this.words[current];
    //check if deleting
    if (this.isDeleting) {
      //remove character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // insert txt to element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    //type speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // if the word is complete do this
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait; //making a pause and the end of the word
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//! our function
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new Writerer(txtElement, words, wait);
}

function renderGalleryItem(imgNum) {
  let gal = document.querySelector(".gallery");
  for (let i = 0; i < imgNum; i++) {
    fetch(`https://picsum.photos/600/480`)
      .then(response => {
        let photo = document.createElement("div");
        photo.classList.add("fetched-div");
        photo.innerHTML = `<img class="gallery-image" src="${response.url}" alt="gallery image" />`;
        gal.appendChild(photo);
      })
      .then(() => {
        i == imgNum - 1 ? $(".loading-fullpage").fadeOut(1000) : null;
      })
      .catch(err => {
        console.error(err);
        let photo = document.createElement("div");
        photo.classList.add("fetched-div");
        let imgSrc = "../img/default.jpg";
        photo.innerHTML = `<img class="gallery-image" src=${imgSrc} alt="gallery image" />`;
        gal.appendChild(photo);
      })
      .then(() => {
        i == imgNum - 1 ? $(".loading-fullpage").fadeOut(100) : null;
      });
  }
}
renderGalleryItem(8);

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
