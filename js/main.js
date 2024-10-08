const nav = document.querySelector("#navBar");
const head = document.querySelector("header");
const navLinks = nav.querySelectorAll("a");
const sections = document.querySelectorAll("section");

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navBar a");

    function changeActiveSection() {
        let index = sections.length;

        if (window.location.pathname.includes("blog.html")) {
            navLinks.forEach((link) => link.classList.remove("active"));
            document
                .querySelector('a[href*="blog.html"]')
                .classList.add("active");
            return;
        }

        while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    window.addEventListener("scroll", changeActiveSection);
});

// Attach event listeners
// window.addEventListener("scroll", updateActiveLink);
// window.addEventListener("load", updateActiveLink);

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
