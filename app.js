$(window).load(() => {
  $(".loading-fullpage").fadeOut(1500);
});

let i = 0;
let ted = "Exploited Explorers!";
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
      .catch(err => {
        console.error(err);
        let photo = document.createElement("div");
        photo.classList.add("fetched-div");
        let imgSrc = "../img/default.jpg";
        photo.innerHTML = `<img class="gallery-image" src=${imgSrc} alt="gallery image" />`;
        gal.appendChild(photo);
      });
  }
}
renderGalleryItem(8);
