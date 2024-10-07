const nav = document.querySelector("#navBar");
const head = document.querySelector("header");
const navLinks = nav.querySelectorAll("a");
const sections = document.querySelectorAll("section");

function updateActiveLink() {
    let currentActive = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentActive = section.getAttribute("id");
            console.log(currentActive);
        }
    });
}
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

const currentUrl = window.location.href;
console.log(currentUrl); // Get the current URL

if (currentUrl.includes("skillsContents")) {
    active = "skills";
} else if (currentUrl.includes("galleryContents")) {
    active = "gallery";
} else if (currentUrl.includes("highlightsContents")) {
    active = "highlights";
} else if (currentUrl.includes("blog")) {
    active = "blog";
}

navLinks.forEach((link) => {
    console.log(link.getAttribute("data-active"));
    if (link.getAttribute("data-active") === "true") {
        // link.classList.add("Active"); // Add the enlarge class
        link.style.border = "2px solid orange";
    }
});

window.addEventListener("scroll", () => {
    if (
        document.body.scrollTop !== 0 ||
        document.documentElement.scrollTop !== 0
    ) {
        navLinks.forEach((link) => {
            link.style.fontSize = "20px";
        });
        head.style.backgroundColor = "";
        head.style.paddingTop = "30px";
        head.style.paddingBottom = "30px";
        head.style.backgroundColor = "rgba(0, 0, 0)";
    } else {
        head.style.backgroundColor = "";
        head.style.paddingTop = "50px";
        head.style.paddingBottom = "50px";
        navLinks.forEach((link) => {
            link.style.fontSize = "25px";
        });
    }
});
