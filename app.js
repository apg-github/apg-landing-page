import hideNav from "./navbarHide";

document.addEventListener("DOMContentLoaded", () => {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new Writerer(txtElement, words, wait);

  renderGallery(4);
  writeText();
  hideNav();
  pulseCursor();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  $(".loading-fullpage").fadeOut(1000);
});

function pulseCursor() {
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
}

let i = 0;
function writeText() {
  const textToType = "Travel corp!";
  const speed = 100;

  if (i < textToType.length) {
    document.querySelector("#name").innerHTML += textToType.charAt(i);
    i++;
  } else {
    return null
  }

  setTimeout(writeText, speed);
}

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
    let typeSpeed = 100;

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

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

function renderGallery(imageNumber) {
  const gallery = document.querySelector(".gallery");

  for (let i = 0; i < imageNumber; i++) {
    fetch(`https://picsum.photos/600/480`)
      .then(response => {
        let photo = document.createElement("div");
        photo.classList.add("fetched-div");

        photo.innerHTML = `<img class="gallery-image" src="${response.url}" alt="gallery image" />`;
        gallery.appendChild(photo);
      })
      .catch(err => {
        console.error(err);
        let photo = document.createElement("div");
        photo.classList.add("fetched-div");
        let imgSrc = "../img/default.jpg";
        photo.innerHTML = `<img class="gallery-image" src=${imgSrc} alt="gallery image" />`;
        gallery.appendChild(photo);
      })
  }
}