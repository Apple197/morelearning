import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
import "https://unpkg.com/lenis@1.1.9/dist/lenis.min.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { global_elements } from "./module/globalElements.js";
//import { recievedData, sentData } from "./module/communicate.js";
import { setIcon } from "./module/icons.js";

//Here is header code
const header = document.querySelector("#header");
header.innerHTML = global_elements.header;

const main = document.querySelector("main");
const underSubMenu = document.querySelector(".under-sub-menu > span");
const openSubMenuHeight = document.querySelector(".sub-menu");
const mobileMenu = document.querySelector(".mobile-menu");

underSubMenu.addEventListener("click", subMenuToggle);
document.documentElement.addEventListener("click", (e) => {
  if (main.classList.contains("active__submenu")) {
    subMenuToggle(e);
  }
});
function subMenuToggle(e) {
  e.stopPropagation();
  //main.classList.toggle("active__submenu") ? lenis.stop() : lenis.start();
  let isSubMenuHeight = openSubMenuHeight.scrollHeight;

  if (main.classList.toggle("active__submenu")) {
    if (window.screen.width < 1195) {
      openSubMenuHeight.style.height = `${isSubMenuHeight}px`;
    } else {
      lenis.stop();
    }
  } else {
    if (window.screen.width < 1195) {
      openSubMenuHeight.style.height = `0`;
    } else {
      lenis.start();
    }
  }
}

mobileMenu.addEventListener("click", mobileMenuToggle);
function mobileMenuToggle() {
  main.classList.toggle("active__mobile__menu") ? lenis.stop() : lenis.start();
}

//Fixed Header on Top Animation
window.addEventListener("scroll", headerFixed);
let lastScroll = 0;

function headerFixed() {
  const currentScroll = window.scrollY;
  if (currentScroll <= 80) {
    main.classList.remove("scroll-up");
  }
  if (currentScroll > lastScroll && !main.classList.contains("scroll-down")) {
    main.classList.remove("scroll-up");
    main.classList.add("scroll-down");
  }
  if (currentScroll < lastScroll && main.classList.contains("scroll-down")) {
    main.classList.remove("scroll-down");
    main.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
}

//Here is footer code
const footer = document.querySelector("#footer");
footer.innerHTML = global_elements.footer;
const copyrightText = document.querySelector("#footer-copyright");
const currentTime = new Date();
let fullYear = currentTime.getFullYear();
copyrightText.textContent = `Copyright ©${fullYear} MoreLearning All Rights Reserved`;

//Initiate Lines for Scroll Smooth in JS
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  //console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//Initiate the icon here
setIcon("nextArrow", "white", ".next-arrow");
setIcon("nextArrow", "black", ".next-arrow-black");
setIcon("customLearning", "white", ".custom-elearning-development");
setIcon("rapidLearning", "white", ".rapid-elearning");
setIcon("mobileLearning", "white", ".Mobile-elearning");
setIcon("explainerVideo", "white", ".explainer-videos");
setIcon("simulationAndGame", "white", ".simulation-and-game-based-learning");
setIcon("translationAndLocaligation", "white", ".translation-and-localigation");
setIcon(
  "classroomAndFacetoFaceTrainingtoLearning",
  "white",
  ".classroom-and-Face-to-face-training-to-elearning"
);
setIcon(
  "LmsDevelopmentAndManagment",
  "white",
  ".LMS-development-and-management"
);
setIcon("flashtoHTMLConversion", "white", ".flash-to-HTML5-conversion");
setIcon("timelyDelivery", "#4361ee", ".timely-delivery");
setIcon("quickResponses", "#4361ee", ".quick-responses");
setIcon("budgetFriendly", "#4361ee", ".budget-friendly");
setIcon("elearningExperts", "#4361ee", ".elearning-experts");
setIcon("nextArrow", "#4361ee", ".goto-source");
setIcon("nextArrow", "white", ".subscribed-newsletter");
setIcon("facebookIcon", "white", ".footer-facebook");
setIcon("instagramIcon", "white", ".footer-instagram");
setIcon("xIcon", "white", ".footer-twitter");
setIcon("linkedinIcon", "white", ".footer-linkedin");
setIcon("phoneIcon", "white", ".footer-email-icon");
setIcon("mailIcons", "white", ".footer-call-icon");
setIcon("locationIcon", "white", ".footer-location-icon");
setIcon("dropdownArrow", "black", ".sub-menu-arrow");
setIcon("videoPlayIcon", "white", ".video-play-icon");
setIcon("healthcareIcon", "#4361ee", ".healthcare-icon");
setIcon("technologyIcon", "#4361ee", ".technology-icon");
setIcon("consultancyIcon", "#4361ee", ".consultancy-icon");
setIcon("logisticsIcon", "#4361ee", ".logistics-icon");
setIcon("miningIcon", "#4361ee", ".mining-icon");
setIcon("educationIcon", "#4361ee", ".education-icon");
setIcon("nextAndPreviousButton", "black", ".previous-icon");
setIcon("nextAndPreviousButton", "black", ".next-icon");
setIcon("learnerCenter", "#4361ee", ".learner-centered-icon");
setIcon("innovationDriven", "#4361ee", ".innovation-driven-icon");
setIcon("resultOriented", "#4361ee", ".results-oriented-icon");
setIcon("passionateExperts", "#4361ee", ".passionate-experts-icon");
setIcon("clientCentricApproach", "#4361ee", ".client-centric-approach-icon");
setIcon("downArrow", "black", ".down-arrow-icon");

//Here is counter login code
function animateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const increment = target / 250;
  let currentValue = 0;

  const updateCounter = () => {
    currentValue += increment;
    if (currentValue < target) {
      counter.textContent = `${Math.ceil(currentValue)}+`;
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = `${target}+`;
    }
  };

  updateCounter();
}

// Intersection Observer to trigger the counter when visible
const counters = document.querySelectorAll(".hlighlighs p");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);

        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  },

  // Trigger when 50% of the element is visible
  { threshold: 0.5 }
);

// Start observing each counter
counters.forEach((counter) => {
  observer.observe(counter);
});

//Logo Carousel Swiper Here
const clientLogo = document.querySelector(".clients-logos");
if (clientLogo) {
  const slickCarousel = new Swiper(clientLogo, {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    simulateTouch: false,
    centeredSlides: true,
    breakpoints: {
      1200: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    autoplay: {
      enabled: true,
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
    },
    centerInsufficientSlides: true,
    speed: 5000,
  });
}

//Testimnonial Carousel Swiper Here
const testimonialCarousel = document.querySelector(
  ".testimonial-section .swiper"
);
const testimonialCarouselServices = document.querySelector(
  ".testimonial-section-services .swiper"
);

testimonialSlider(testimonialCarousel);
testimonialSlider(testimonialCarouselServices);

function testimonialSlider(wrapper) {
  if (wrapper) {
    new Swiper(wrapper, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 500,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
      navigation: {
        nextEl: ".swiper-button-nex",
        prevEl: ".swiper-button-pre",
      },
    });
  }
}

const faq = document.querySelectorAll(".faq");

if (faq) {
  faq.forEach((element, index) => {
    let faqTrack = element.querySelector(".faq-ask");
    let faqAnswer = element.querySelector(".faq-answer");

    faqTrack.addEventListener("click", () => {
      let openFaq = faqAnswer.scrollHeight;
      element.classList.toggle("active");

      if (element.classList.contains("active")) {
        faqAnswer.style.height = `${openFaq}px`;
      } else {
        faqAnswer.style.height = 0;
      }
      collapse(index);
    });
  });

  const collapse = (index) => {
    faq.forEach((collapseElement, collapseIndex) => {
      let collapseFaqAnswer = collapseElement.querySelector(".faq-answer");
      if (collapseIndex != index) {
        collapseElement.classList.remove("active");
        collapseFaqAnswer.style.height = 0;
      }
    });
  };
}
