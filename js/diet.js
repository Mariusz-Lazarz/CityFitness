"use strict";

const sectionDiet = document.querySelector(".meal-container");
const dietBtns = document.querySelectorAll(".btn");
const ingredientsList = document.querySelector(".ingredients-list");

fetch("diet1.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dietBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        console.log(e.currentTarget);
        const category = e.currentTarget.dataset.id;
        let objDay = data.map(function (item) {
          if (item.day === category) {
            document.querySelector(
              ".diet-title"
            ).textContent = `Dzień ${item.day}`;
            return `<div class="meal-box">
        <h3 class="meal-title">${item.name}</h3>
        <p class="macros">${item.kcal}kcal ${item.protein}B ${item.fats}T ${item.carbs}W</p>
        <h4 class="ingredients-title">Składniki</h4>
        <li class="ingredient">${item.ingredients}</li>
         </div>`;
          }
        });

        objDay = objDay.join("");
        sectionDiet.innerHTML = objDay;
      });
    });
  });
