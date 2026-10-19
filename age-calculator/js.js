// let dayInput= document.getElementById("day-input");
// let dayContainer = dayInput.parentElement; // .day-container
// let dayLabel = dayContainer.querySelector(".label");
// let dayError = dayContainer.querySelector(".error-message");
// let monthInput = document.getElementById("month-input");
// let monthContainer = monthInput.parentElement;
// let monthLabel = monthContainer.querySelector(".label");
// let monthError = monthContainer.querySelector(".error-message");
// let yearInput = document.getElementById("year-input");
// let yearContainer = yearInput.parentElement;
// let yearLabel = document.querySelector(".label")
// let yearError = document.querySelector(".error-message");
// let arrowBtn = document.querySelector(".btn-img");
// let yearOutput = document.getElementById("year-re");
// let monthOutput = document.getElementById("month-re");
// let dayOutput = document.getElementById("day-re");  


// arrowBtn.addEventListener("click", function(){
//   let dayValue = Number(dayInput.value);
//   let monthValue =Number(monthInput.value) ;
//   let yearValue = Number(yearInput.value);
//   if(isNaN(dayValue) || dayValue < 1 || dayValue > 31){
//     dayInput.classList.add("error");
//     dayLabel.classList.add("error");
//     dayError.style.display = "block";
//     return;
//   }  else {
//     dayInput.classList.remove("error");
//     dayLabel.classList.remove("error");
//     // dayError.style.display = "none";
//   }
//   if(isNaN(yearValue) || yearValue > 2025){
//     yearInput.classList.add("error");
//     yearLabel.classList.add("error");
//     yearError.style.display = "block";
//     return;
//   }  else {
//     yearInput.classList.remove("error");
//     yearLabel.classList.remove("error");
//     yearError.style.display = "none";
//   }
//   if(isNaN(monthValue) || monthValue < 1 || monthValue > 12){
//     monthInput.classList.add("error");
//     monthLabel.classList.add("error");
//     monthError.style.display = "block";
//     return;
//   }  else {
//     monthInput.classList.remove("error");
//     monthLabel.classList.remove("error");
//     monthError.style.display = "none";
//   }

//   let today = new Date();
//   let birthDate = new Date(yearValue, monthValue - 1, dayValue);

//   let years = today.getFullYear() - birthDate.getFullYear();
//   let months = today.getMonth() - birthDate.getMonth();
//   let days = today.getDate() - birthDate.getDate();

//   if (days < 0) {
//     months -= 1;
//     // get days in previous month
//     let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
//     days += prevMonth.getDate();
//   }

//   if (months < 0) {
//     years -= 1;
//     months += 12;
//   }

//   // update outputs
//   yearOutput.textContent = years;
//   monthOutput.textContent = months;
//   dayOutput.textContent = days;
// })

// get inputs
const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");

// get labels
const dayLabel = dayInput.previousElementSibling;
const monthLabel = monthInput.previousElementSibling;
const yearLabel = yearInput.previousElementSibling;

// get error messages
const dayError = dayInput.nextElementSibling;
const monthError = monthInput.nextElementSibling;
const yearError = yearInput.nextElementSibling;

// get outputs
const dayOutput = document.getElementById("day-re");
const monthOutput = document.getElementById("month-re");
const yearOutput = document.getElementById("year-re");

// get arrow button
const arrowBtn = document.querySelector(".btn-img");

arrowBtn.addEventListener("click", function() {
  let dayValue = Number(dayInput.value);
  let monthValue = Number(monthInput.value);
  let yearValue = Number(yearInput.value);

  // validation
  let valid = true;

  if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
    dayInput.classList.add("error");
    dayLabel.classList.add("error");
    dayError.style.display = "block";
    valid = false;
  } else {
    dayInput.classList.remove("error");
    dayLabel.classList.remove("error");
    dayError.style.display = "none";
  }

  if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
    monthInput.classList.add("error");
    monthLabel.classList.add("error");
    monthError.style.display = "block";
    valid = false;
  } else {
    monthInput.classList.remove("error");
    monthLabel.classList.remove("error");
    monthError.style.display = "none";
  }

  if (isNaN(yearValue) || yearValue > new Date().getFullYear()) {
    yearInput.classList.add("error");
    yearLabel.classList.add("error");
    yearError.style.display = "block";
    valid = false;
  } else {
    yearInput.classList.remove("error");
    yearLabel.classList.remove("error");
    yearError.style.display = "none";
  }

  if (!valid) return; // stop if any input invalid

  // calculate age
  let today = new Date();
  let birthDate = new Date(yearValue, monthValue - 1, dayValue);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // update outputs
  yearOutput.textContent = years;
  monthOutput.textContent = months;
  dayOutput.textContent = days;
});
