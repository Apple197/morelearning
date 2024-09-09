import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
import "https://unpkg.com/lenis@1.1.9/dist/lenis.min.js";
import { Swiper } from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { recievedData, sentData } from "./module/communicate.js";
import { setIcon } from "./module/icons.js";

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

function getWebLink(pageUrl, which = "email") {
  if (which === "pages") {
    return `${window.location.protocol}//${window.location.host}/${pageUrl}`;
  } else if (which === "whatsapp") {
    return `https://wa.me/${pageUrl}`;
  } else if (which === "call") {
    return `tel:${pageUrl}`;
  } else {
    return `mailto:${pageUrl}`;
  }
}

//Get all url
const relURL = {
  Home: getWebLink("", "pages"),
  About: getWebLink("about.html", "pages"),
  Contact: getWebLink("contact.html", "pages"),
  Ourwork: getWebLink("our-work.html", "pages"),
  Blog: getWebLink("blogs/", "pages"),
  Temblog: `https://morestudios.in/blogs/`,
  Corporatevideosolutions: getWebLink(
    "corporate-video-solutions.html",
    "pages"
  ),
  Marketingvideosolutions: getWebLink(
    "marketing-video-solutions.html",
    "pages"
  ),
  Animatedvideosolutions: getWebLink("animated-video-solutions.html", "pages"),
  Educationalandtrainingsolutions: getWebLink(
    "educational-and-training-solutions.html",
    "pages"
  ),
  Call: getWebLink("+919773547193", "call"),
  Email: getWebLink("contact@morestudios.in"),
  whatsapp: getWebLink("919773547193", "whatsapp"),
  facebookLink: "https://www.facebook.com/people/MoreStudios/61551484257691/",
  xLink: "https://x.com/morestudio8",
  instagramLink: "https://www.instagram.com/morestudios8/",
  linkedinLink: "https://www.linkedin.com/company/morestudios",
  location: "https://maps.app.goo.gl/MpzWVyHaGaxy8Cvr6",
  site__logo: getWebLink("assets/images/logo.webp", "pages"),
  tem_site_logo: "https://morestudios-v3.netlify.app/assets/images/logo.webp",
};

const global_elements = {
  header: `<div class="container-fuild px-xl-5 px-4"><div class="site-logo"><img src="${relURL.tem_site_logo}" alt="Morestudios logo"></div><nav class="navigation"><ul><li><a href="${relURL.Home}">Home</a></li><li><a href="${relURL.About}">About</a></li><li><a href="${relURL.Ourwork}">Our Work</a></li><li class="under-sub-menu"><span>Services<span class="sub-menu-arrow"></span></span><ul class="sub-menu"><li><a href="${relURL.Corporatevideosolutions}"><span class="corporate-video-icon"></span>Corporate Video Solutions  </a></li><li><a href="${relURL.Marketingvideosolutions}"><span class="animation-video-icon"></span>Animated Video Solutions</a></li><li><a href="${relURL.Animatedvideosolutions}"><span class="product-video-icon"></span>Marketing Video Solutions</a></li><li><a href="${relURL.Educationalandtrainingsolutions}"><span class="social-media-video-icon"></span>Educational and Training Solutions</a></li></ul></li><li><a href="${relURL.Temblog}">Blog</a></li><li><a href="${relURL.Contact}">Contact</a></li></ul></nav><div class="call-to-action-header"><a href="${relURL.Call}" class="site-button primary-button">Connect Now</a></div><div class="mobile-menu"><span></span><span></span><span></span></div></div>`,
  footer: ``,
};

const header = document.querySelector("#header");
header.innerHTML = global_elements.header;
const footer = document.querySelector("#footer");
footer.innerHTML = global_elements.footer;

const logoRefLink = document.querySelector(".site-logo");
logoRefLink.addEventListener("click", () => {
  window.location.href = relURL.Home;
});

const copyrightText = document.querySelector("#footer-copyright");
const currentTime = new Date();
let fullYear = currentTime.getFullYear();
copyrightText.textContent = `Copyright ©${fullYear} MoreLearning All Rights Reserved`;
