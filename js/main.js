const highlightsContainer = document.getElementById("highlightsContents");

const FirstSlideShow = highlightsContainer.querySelector("#firstRow");
const SecondSlideShow = highlightsContainer.querySelector("#secondRow");
const secondC1 = SecondSlideShow.querySelector(".c1");
const secondC2 = SecondSlideShow.querySelector(".c2");
const secondC3 = SecondSlideShow.querySelector(".c3");
const ThirdSlideShow = highlightsContainer.querySelector("#thirdRow");
const thirdC1 = ThirdSlideShow.querySelector(".thirdphoto1");
const thirdC2 = ThirdSlideShow.querySelector(".thirdphoto2");

const slideshowWrapper = highlightsContainer.querySelectorAll(".slideshow");

//Highlights slideshow images

const highlightsFirstImages = [
    "/images/Winners/1.jpg",
    "/images/Winners/2.JPG",
    "/images/Winners/3.JPG",
    "/images/Winners/4.jpg",
];

const highlightsSecondC1images = [
    "/images/Hackademia/1.jpg",
    "/images/Hackademia/2.jpg",
    "/images/Hackademia/4.jpg",
    "/images/Hackademia/5.JPG",
    "/images/Hackademia/6.JPG",
    "/images/Hackademia/7.JPG",
    "/images/Hackademia/8.JPG",
    "/images/Hackademia/9.JPG",
    "/images/Hackademia/10.JPG",
    "/images/Hackademia/11.JPG",
];

const highlightsSecondC2images = [
    "/images/Kathcode/1.JPG",
    "/images/Kathcode/3.JPG",
    "/images/Kathcode/4.JPG",
    "/images/Kathcode/5.JPG",
    "/images/Kathcode/IMG_4054.JPG",
];

const highlightsSecondC3images = [
    "/images/Hult/1.jpg",
    "/images/Hult/2.jpg",
    "/images/Hult/3.jpg",
    "/images/Hult/4.jpg",
    "/images/Hult/5.jpg",
    "/images/Hult/6.jpg",
    "/images/Hult/7.jpg",
    "/images/Hult/8.jpg",
];

const highlightsThirdC1images = [
    "/images/Participations/1.jpg",
    "/images/Participations/2.jpg",
    "/images/Participations/3.jpg",
    "/images/Participations/4.JPG",
];

const highlightsThirdC2images = [
    "/images/Hackademia/3.jpg",
    "/images/myPresence/1.jpg",
    "/images/myPresence/2.jpg",
    "/images/myPresence/3.JPG",
    "/images/myPresence/4.jpg",
    "/images/myPresence/5.JPG",
    "/images/myPresence/6.JPG",
    "/images/myPresence/7.JPG",
];

let currentImageIndex1 = 0;
let currentImageIndex2 = 0;
let currentImageIndex3 = 0;
let currentImageIndex4 = 0;
let currentImageIndex5 = 0;
let currentImageIndex6 = 0;
let currentIndex = 0;

function slideShow() {
    FirstSlideShow.style.backgroundImage = `url('${highlightsFirstImages[currentImageIndex1]}')`;
    currentImageIndex1 =
        (currentImageIndex1 + 1) % highlightsFirstImages.length;

    secondC1.style.backgroundImage = `url('${highlightsSecondC1images[currentImageIndex2]}')`;
    currentImageIndex2 =
        (currentImageIndex2 + 1) % highlightsSecondC1images.length;

    secondC2.style.backgroundImage = `url('${highlightsSecondC2images[currentImageIndex3]}')`;
    currentImageIndex3 =
        (currentImageIndex3 + 1) % highlightsSecondC2images.length;

    secondC3.style.backgroundImage = `url('${highlightsSecondC3images[currentImageIndex4]}')`;
    currentImageIndex4 =
        (currentImageIndex4 + 1) % highlightsSecondC3images.length;

    thirdC1.style.backgroundImage = `url('${highlightsThirdC1images[currentImageIndex5]}')`;
    currentImageIndex5 =
        (currentImageIndex5 + 1) % highlightsThirdC1images.length;

    thirdC2.style.backgroundImage = `url('${highlightsThirdC2images[currentImageIndex6]}')`;
    currentImageIndex6 =
        (currentImageIndex6 + 1) % (highlightsThirdC2images.length);

    slideshowWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    currentIndex = (currentIndex + 1) % slideshowWrapper.length;
}
console.log(highlightsThirdC1images.length + 1);

setInterval(slideShow, 3000);

slideShow();
