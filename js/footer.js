'use strict'




const nameField = document.querySelector(".name");
const emailField = document.querySelector(".email");
const messField = document.querySelector(".mess");
const form = document.querySelector('.footer-form');
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const messError = document.querySelector(".mess-error");



form.addEventListener('submit', (e) => {
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const mess = messField.value.trim();
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
// email valid 
  if(!re.test(String(email).toLowerCase())){
    e.preventDefault();
    emailError.textContent = `Prosze podać email ❌`;
    emailError.style.color = 'red';
  } else {
    emailError.textContent = `✔️`;
    emailError.style.color = 'green';
  }
  // name valid 
  if(!regName.test(name) && name.length <= 0){
    e.preventDefault();
    nameError.textContent = `Proszę podać nazwe ❌`;
    nameError.style.color = 'red';
  }else {
    nameError.textContent = `✔️`;
    nameError.style.color = 'green';
  }
  // text valid 
  if(!regName.test(mess) && mess.length <= 5){
    e.preventDefault();
    messError.textContent = `Proszę uzupełnić pole ❌`;
    messError.style.color = 'red';
  }else{
    messError.textContent = `✔️`;
    messError.style.color = 'green';
  }

});



// function checkInputs(){
//   const name = nameField.value.trim();
//   const email = emailField.value.trim();
//   const mess = messField.value.trim();
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
// // email valid 
//   if(!re.test(String(email).toLowerCase())){
//     emailError.textContent = `Prosze podać email ❌`;
//     emailError.style.color = 'red';
//   } else {
//     emailError.textContent = `✔️`;
//     emailError.style.color = 'green';
//   }
//   // name valid 
//   if(!regName.test(name) && name.length <= 0){
//     nameError.textContent = `Proszę podać nazwe ❌`;
//     nameError.style.color = 'red';
//   }else {
//     nameError.textContent = `✔️`;
//     nameError.style.color = 'green';
//   }
//   // text valid 
//   if(!regName.test(mess) && mess.length <= 5){
//     messError.textContent = `Proszę uzupełnić pole ❌`;
//     messError.style.color = 'red';
//   }else{
//     messError.textContent = `✔️`;
//     messError.style.color = 'green';
//   }

// };


// // email validation 
// function validateEmail(email) {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if(!re.test(String(email).toLowerCase())){
//     emailError.textContent = `Wypełnij pole`;
//   } else {
//     emailError.textContent = `Dobrze`;
//   }

  
// }

// // name validation 
// function validateName(name){
//   const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
//   if(!regName.test(name)){
//     nameError.textContent = `Wypełnij pole`;
//   }else {
//     nameError.textContent = `Dobrze`;
//   }
// }

// // text validation 
// function validateMess(text){
//   const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
//   if(!regName.test(text)){
//     messError.textContent = `Wypełnij pole`;
//   }else{
//     messError.textContent = `Dobrze`;
//   }
// }






