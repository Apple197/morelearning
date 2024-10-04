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

export const global_elements = {
  header: `<div class="container px-4"><div class="site-logo"><img src="assets/images/morelearning.webp" alt="Morelearning logo"></div><nav class="navigation"><ul><li><a href="#">ABOUT</a></li><li class="under-sub-menu"><span>SERVICES<span class="sub-menu-arrow"></span></span><ul class="sub-menu"><li><a href="#"><span class="corporate-video-icon"></span>Custom elearning development</a></li><li><a href="#"><span class="corporate-video-icon"></span>Rapid elearning</a></li><li><a href="#"><span class="corporate-video-icon"></span>Mobile elearning</a></li><li><a href="#"><span class="corporate-video-icon"></span>Explainer Videos</a></li><li><a href="#"><span class="corporate-video-icon"></span>Simulation & Game Based learning</a></li><li><a href="#"><span class="corporate-video-icon"></span>Translation & Localigation</a></li><li><a href="#"><span class="corporate-video-icon"></span>Classroom and Face-to-face training to eLearning</a></li><li><a href="#"><span class="corporate-video-icon"></span>LMS development and management</a></li><li><a href="#"><span class="corporate-video-icon"></span>Flash to HTML5 conversion</a></li></ul></li><li><a href="#">PORTFOLIO</a></li><li><a href="#">BLOG</a></li><li><a href="#">CONTACT</a></li></ul></nav><div class="mobile-menu"><span></span><span></span><span></span></div></div>`,
  footer: `<div class="container px-4"><div class="row"><div class="col-12"><div class="footer-wrapper"><div class="footer-company-profile"><img src="assets/images/morelearning-white-logo.webp" alt="morestudios logo"><p>We are a creative agency working globally. helping organizations across many industries succeed at telling their story.</p><div class="newsletter-form"><form action="#" method="post"><input type="email" name="subscribed" class="subscribe-newsletter" placeholder="Subscribe to our Newsletter*" required><button class="subscribed-newsletter"></button></form></div><div class="footer-award"><h4>MoreLearning Awarded Agency</h4><div class="award-logo"><img src="assets/images/award.webp" alt="award logo"><img src="assets/images/award.webp" alt="award logo"><img src="assets/images/award.webp" alt="award logo"></div></div></div><div class="footer-services"><h5>Services</h5><ul><li><a href="#">Custom elearning development</a></li><li><a href="#">Rapid elearning</a></li><li><a href="#">Mobile elearning</a></li><li><a href="#">Explainer Videos</a></li><li><a href="#">Simulation & Game Based learning</a></li><li><a href="#">Translation & Localigation</a></li><li><a href="#">Classroom and Face-to-face training to eLearning</a></li><li><a href="#">LMS development and management</a></li><li><a href="#">Flash to HTML5 conversion</a></li></ul></div><div class="footer-our-pages"><h5>Our Pages</h5><ul><li><a href="#">About</a></li><li><a href="#">Services</a></li><li><a href="#">Contact</a></li><li><a href="#">Blog</a></li><li><a href="#">Portfolio</a></li></ul></div><div class="footer-contact"><h5>Contact</h5><ul><li><a href="#"><span class="footer-email-icon"></span>contact@morestudios.in</a></li><li><a href="#"><span class="footer-call-icon"></span>+919773547193</a></li><li><a href="#"><span class="footer-location-icon"></span>125, 1st Floor, Tribhuvan Complex, Ishwar Nagar, New Delhi, 110065</a></li></ul> </div></div></div><div class="col-12"><div class="copyright-footer"><p id="footer-copyright"></p><div class="footer-social-links"><a href="#"><span class="footer-facebook"></span></a><a href="#"><span class="footer-instagram"></span></a><a href="#"><span class="footer-twitter"></span></a><a href="#"><span class="footer-linkedin"></span></a></div></div></div></div></div>`,
};

/* const logoRefLink = document.querySelector(".site-logo");
logoRefLink.addEventListener("click", () => {
  window.location.href = relURL.Home;
}); */
