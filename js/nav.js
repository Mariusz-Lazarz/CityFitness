'use strict'


// burger menu function 
const navSlide = () => {
    const hamburger = document.getElementById("burger");
    const navUL = document.getElementById("nav-ul");
    const navLinks = document.querySelectorAll(".nav-ul li");
  
    hamburger.addEventListener("click", () => {
      // toggle
      navUL.classList.toggle("nav-active");
  
      // animate
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
      // burger aniumation
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();
  

  window.addEventListener("scroll", () => {
    const header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 50);
  });


