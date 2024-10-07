const nav = document.querySelector("#navBar");
const head = document.querySelector("header");

window.addEventListener("scroll", () => {
const navButtons = nav.querySelectorAll("a");
    if (
        document.body.scrollTop !== 0 ||
        document.documentElement.scrollTop !== 0
    ) {
        navButtons.forEach((link) => {
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
        navButtons.forEach((link) => {
            link.style.fontSize = "25px";
        });
    }
});
