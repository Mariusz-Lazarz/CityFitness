'use strict'

const errorMessage = document.querySelector(".error");
const btnSubmit = document.getElementById("btn-submit");
const btnBulk = document.getElementById("btn-bulk");
const btnCut = document.getElementById("btn-cut");
const diet = document.querySelector(".diet");
const textCalories = document.querySelector(".text-calories");
const intro = document.querySelector(".start-wrap");
const btns = document.querySelectorAll('.btn');
const dietBox = document.querySelectorAll(".diet-box");


let kcal = 0; 


// dietAddClass function 
function dietAddClass (){
  diet.classList.add("active");
      dietBox.forEach((box)=>{
        if(box.style.animation){
          box.style.animation = "";
        } else {
          box.style.animation = `dietBoxFade 1s ease-in`;
        }
      });
}


// dietRemoveClass function
function dietRemoveClass (){
  diet.classList.remove("active");
  dietBox.forEach((box)=>{
    if(box.style.animation){
      box.style.animation = "";
    } else {
      box.style.animation = ``;
    }
  });
}



// on click 
btnSubmit.addEventListener("click", function () {
  const kg = document.getElementById("kg").value;
  // if kg are more than 0 run function 
  if (kg > 0){
    kcal = kg *33;
    errorMessage.textContent = "";
     // display calories funcion 
    if (kcal >= 1500 && kcal <= 3300) {
      dietAddClass();
      textCalories.textContent = `Twoje dzienne zapotrzebowanie kaloryczne wynosi ${
        kcal
      }. Wybierz odpowiedni program: `;
    } else {
      // if calories are below remaining 
      dietAddClass();
      textCalories.textContent = `Twoje dzienne zapotrzebowanie kaloryczne wynosi ${kcal}, skontaktuj się z nami aby otrzymać spersonalizowaną dietę.`
      
    }
  } else {
    // if u dont put weight number or its less than 0 
    errorMessage.textContent = "Prosze podać wagę";
  }
});

// if clicked outside diex box close 
intro.addEventListener("click", function (e) {
  if (e.target.classList.contains("start-wrap")) {
    dietRemoveClass();

  }
});

// close with escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    dietRemoveClass()
  }
});



// intersection observer slide in 

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "-300px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
     // console.log(entry.target);
      appearOnScroll.unobserve(entry.target);
    } else {
      //entry.target.classList.remove("appear");
      return;
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});


// smoth scrolling when clicked on anchor tag

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



console.log(document.querySelector('.total-money'));






