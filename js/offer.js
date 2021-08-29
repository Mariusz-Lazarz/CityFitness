'use strict'

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  

const totalMoneyDiet = document.querySelector('.total-money-diet');
const totalMoneyTD = document.querySelector('.total-money-td');
const totalMoneyT = document.querySelector('.total-money-t');


function change (selectObj){
    const opinionInt = parseInt(selectObj.value);

    totalMoneyDiet.textContent = `${opinionInt / 30 * 139.99} zł`

}
function change1 (selectObj){
    const int1 = parseInt(selectObj.value);

    totalMoneyTD.textContent = `${int1 / 30 * 189.99} zł`

}
function change2 (selectObj){
    const int2 = parseInt(selectObj.value,10);

    totalMoneyT.textContent = `${Math.round(int2 / 30 * 89.99 *100 )/ 100} zł`

}