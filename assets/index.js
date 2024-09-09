import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
import "https://unpkg.com/lenis@1.1.9/dist/lenis.min.js";
import { Swiper } from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { global_elements } from "./module/globalElements.js";
import { recievedData, sentData } from "./module/communicate.js";
import { setIcon } from "./module/icons.js";

//Add Header Footer in the site
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

header.innerHTML = global_elements.header;
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
const leftClient = document.querySelector(".swiper .left-carousel");

const TruetedBy = new Swiper(".swiper .left-carousel", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  simulateTouch: false,
  centeredSlides: true,
  breakpoints: {
    986: {
      slidesPerView: 5,
    },
    786: {
      slidesPerView: 4,
    },
    586: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  centerInsufficientSlides: true,
  speed: 3000,
});
