const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let position = 0;

function displayDots() {
  let divDots = document.getElementById("dots");
  for (let i = 0; i < slides.length; i++) {
    let newDivDot = document.createElement("div");
    console.log(newDivDot);

    newDivDot.classList.add("dot");
    if (i === position) {
      newDivDot.classList.add("dot_selected");
    }

    divDots.appendChild(newDivDot);
  }
}
displayDots();

function updateImage() {
  let imageBanner = document.querySelector(".banner-img");
  imageBanner.src = "./assets/images/slideshow/" + slides[position].image;
  imageBanner.alt = slides[position].tagLine;
}

function setPositionRight() {
  position++;
  if (position > slides.length - 1) {
    position = 0;
  }
}

function setPositionLeft() {
  position--;
  if (position < 0) {
    position = slides.length - 1;
  }
}

function removeDotSelected() {
  listDots[position].classList.remove("dot_selected");
}

function addDotSelected() {
  listDots[position].classList.add("dot_selected");
}

const listDots = document.querySelectorAll(".dot");

// const listArrow = document.querySelectorAll(".arrow");

// for (let i = 0; i < listArrow.length; i++) {
//   const arrow = listArrow[i];

//   arrow.addEventListener("click", (event) => {
//     arrowClicked = event.target;
//     console.log(`Flèche cliquée: ${arrowClicked.classList.value}`);

//     listDots[position].classList.remove("dot_selected");

//     if (arrowClicked.classList.value === "arrow arrow_right") {
//       setPositionRight();
//     }

//     if (arrowClicked.classList.value === "arrow arrow_left") {
//       setPositionLeft();
//     }

//     listDots[position].classList.add("dot_selected");
//     updateImage();
//   });
// }

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  removeDotSelected();
  setPositionLeft();
  addDotSelected();
  updateImage();
});

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  removeDotSelected();
  setPositionRight();
  addDotSelected();
  updateImage();
});
