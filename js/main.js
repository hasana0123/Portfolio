const nav = document.querySelector("#navBar");
const head = document.querySelector("header");
const navLinks = nav.querySelectorAll("a");
const sections = document.querySelectorAll("section");

// function updateActiveLink() {
//     let currentActive = "";

//     sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
//             currentActive = section.getAttribute("id");
//             console.log("current Active:",currentActive);
//         }
//     });
// }
// window.addEventListener("scroll", updateActiveLink);
// window.addEventListener("load", updateActiveLink);

// let active = "";

// const currentUrl = window.location.href;
// console.log(currentUrl); // Get the current URL

// if (currentUrl.includes("indexContents")) {
//     active = "home";
// } else if (currentUrl.includes("skillsContents")) {
//     active = "skills";
// } else if (currentUrl.includes("galleryContents")) {
//     active = "gallery";
// } else if (currentUrl.includes("highlightsContents")) {
//     active = "highlights";
// } else if (currentUrl.includes("blog")) {
//     active = "blog";
// }
// console.log("active: ", active);

// navLinks.forEach((link) => {
//     console.log(link.getAttribute("data-active"));
//     if (link.getAttribute("data-active") === "true") {
//         // link.classList.add("Active"); // Add the enlarge class
//         link.style.border = "2px solid orange";
//     }
// });

function updateActiveLink() {
    let currentActive = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is in the viewport
        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentActive = section.getAttribute("id");
            console.log("current Active:", currentActive);
        }
    });

    // Update the navigation links based on the active section
    navLinks.forEach((link) => {
        const href = link.getAttribute("href").split("#")[1]; // Get the ID from the href
        console.log(href);
        if (href === currentActive) {
            link.setAttribute("data-active", "true");
            link.style.border = "2px solid orange"; // Example style to highlight active link
        } else {
            link.setAttribute("data-active", "false");
            link.style.border = ""; // Reset style
        }
    });
}

// Attach event listeners
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

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
