// script.js

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector(".banner-text");
const dots = document.querySelectorAll(".dots");

function updateSlide(index) {
    currentSlide = index;
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
	const dot = document.querySelectorAll(".dot")
	dot.forEach((dot,i)=> {
		dot.classList.toggle("dot_selected", i === currentSlide);
	})
}

document.querySelector(".arrow_left").addEventListener("click", () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide(currentSlide);
});

document.querySelector(".arrow_right").addEventListener("click", () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide(currentSlide);
});

slides.forEach((slide, index) => {
	const myDot = document.createElement('div')
	if (index === 0 ) { 
		myDot.className = 'dot dot_selected'
	}
	else{
		myDot.className = "dot"; 
	}
	document.querySelector ('.dots').appendChild(myDot)
	
});

// Optionnel: Auto-play du diaporama
setInterval(() => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide(currentSlide);
}, 5000);








