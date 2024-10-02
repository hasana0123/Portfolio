const highlightsContainer = document.getElementById("highlightsContents");

const FirstSlideShow = highlightsContainer.querySelector("#firstRow");
const SecondSlideShow = highlightsContainer.querySelector("#secondRow");
const secondC1 = SecondSlideShow.querySelector(".c1");
const secondC2 = SecondSlideShow.querySelector(".c2");
const secondC3 = SecondSlideShow.querySelector(".c3");

//Highlights slideshow images

const galFirstImages = [
    "/images/Kathcode/1.JPG",
    "/images/Kathcode/2.JPG",
    "/images/Kathcode/3.JPG",
];

const galThirdImages = ["/images/Hackademia/1.jpg", "/images/Hackademia/2.jpg"];

let currentImageIndex = 0;

function slideShow() {
    FirstSlideShow.style.backgroundImage = `url('${galFirstImages[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % galFirstImages.length;
}

setInterval(slideShow, 3000);

slideShow();
