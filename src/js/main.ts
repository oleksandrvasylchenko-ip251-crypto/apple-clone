// @ts-ignore
import "../styles/main.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// @ts-ignore
import "./threeScene";

gsap.registerPlugin(ScrollTrigger);

// ===== BURGER MENU =====
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const mobileLinks = mobileMenu?.querySelectorAll("a");

burger?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("active");
    burger?.classList.toggle("active");
});

closeMenuBtn?.addEventListener("click", () => {
    mobileMenu?.classList.remove("active");
    burger?.classList.remove("active");
});

mobileLinks?.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu?.classList.remove("active");
        burger?.classList.remove("active");
    });
});

// ===== DARK MODE =====
document.addEventListener("keydown", (e) => {
    if (e.key === "d" || e.key === "D") {
        document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", String(document.body.classList.contains("dark")));
    }
});

// Load dark mode preference
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

// ===== HERO ANIMATIONS =====
gsap.from(".hero-title", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".hero-subtitle", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
});

gsap.from(".hero-buttons", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
});

gsap.from(".hero-image", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: 0.9,
    ease: "power2.out"
});

// ===== DARK HERO ANIMATIONS =====
gsap.from(".hero-dark-title", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero-dark",
        start: "top center"
    }
});

gsap.from(".hero-dark-subtitle", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero-dark",
        start: "top center"
    }
});

// ===== CARDS ANIMATION =====
gsap.utils.toArray(".card").forEach((card: any) => {
    gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true
        }
    });
});

// ===== TECH ITEMS ANIMATION =====
gsap.utils.toArray(".tech-item").forEach((item: any, index: number) => {
    gsap.from(item, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true
        }
    });
});

// ===== VIDEO SLIDER =====
interface SliderState {
    currentIndex: number;
    autoplayInterval: NodeJS.Timeout | null;
}

const sliderState: SliderState = {
    currentIndex: 0,
    autoplayInterval: null
};

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const slidesWrapper = document.querySelector(".slides-wrapper");

if (slides.length > 0) {
    const updateSlider = (index: number) => {
        // Validate index
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        sliderState.currentIndex = index;

        // Update slides
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slides[index].classList.add("active");

        // Update dots
        dots.forEach((dot) => {
            dot.classList.remove("active");
        });
        dots[index]?.classList.add("active");

        // Reset autoplay
        resetAutoplay();
    };

    const nextSlide = () => {
        updateSlider(sliderState.currentIndex + 1);
    };

    const prevSlide = () => {
        updateSlider(sliderState.currentIndex - 1);
    };

    const startAutoplay = () => {
        sliderState.autoplayInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    };

    const resetAutoplay = () => {
        if (sliderState.autoplayInterval) {
            clearInterval(sliderState.autoplayInterval);
        }
        startAutoplay();
    };

    // Event listeners
    prevBtn?.addEventListener("click", prevSlide);
    nextBtn?.addEventListener("click", nextSlide);

    // Dot clicks
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            updateSlider(index);
        });
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
    });

    // Pause on hover
    slidesWrapper?.addEventListener("mouseenter", () => {
        if (sliderState.autoplayInterval) {
            clearInterval(sliderState.autoplayInterval);
        }
    });

    slidesWrapper?.addEventListener("mouseleave", () => {
        startAutoplay();
    });

    // Start autoplay
    startAutoplay();
}

// ===== SMOOTH SCROLL FOR HASH LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

// ===== SCROLL TRIGGER CLEANUP =====
window.addEventListener("beforeunload", () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});

console.log("🍎 Apple Clone loaded successfully!");
