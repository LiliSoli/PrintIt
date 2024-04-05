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
const listDots = document.querySelectorAll(".dot");

function arrowClicked(direction) {
	listDots[position].classList.remove("dot_selected");
	
	if (direction == "left") {
		position--;
		if (position < 0) {
			position = slides.length - 1;
		}
	}
	
	if (direction == "right") {
		position++;
		if (position > slides.length - 1) {
			position = 0;
		}
	}
	
	listDots[position].classList.add("dot_selected");

	let imageBanner = document.querySelector(".banner-img");
	imageBanner.src = "./assets/images/slideshow/" + slides[position].image;
	imageBanner.alt = slides[position].tagLine;
}

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", () => {
  arrowClicked("left");
});

arrowRight.addEventListener("click", () => {
  arrowClicked("right");
});