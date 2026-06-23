// @ts-ignore: side-effect style import without type declarations
import "../styles/main.scss";

import gsap from "gsap";

gsap.from(".hero-title", {
    y: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".hero-subtitle", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: .3
});

gsap.from(".hero-buttons", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: .6
});

gsap.from(".hero-image", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: .9
});

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger?.addEventListener("click", () => {

    mobileMenu?.classList.toggle("active");

});