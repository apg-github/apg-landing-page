//! init on DOMLoad
window.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
});

document.addEventListener("DOMContentLoaded", init);

//! our function
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new Writer(txtElement, words, wait);
}

// ES6 CLASS //////////////////////////
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
