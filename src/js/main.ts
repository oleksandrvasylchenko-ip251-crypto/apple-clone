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

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card").forEach((card: any) => {

    gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: "top 80%"
        }
    });

});

const body = document.body;

document.addEventListener("keydown", e => {

    if (e.key === "d") {

        body.classList.toggle("dark");

    }

});

// @ts-ignore: side-effect import without type declarations
import "./threeScene";

import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshNormalMaterial();

const cube = new THREE.Mesh(
geometry,
material
);

scene.add(cube);

camera.position.z = 5;

function animate(){

requestAnimationFrame(animate);

cube.rotation.x+=0.01;

cube.rotation.y+=0.01;

renderer.render(scene,camera);

}

animate();