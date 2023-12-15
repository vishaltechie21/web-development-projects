// get the dom elements 

let togglePop = document.querySelector(".toggle");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () =>{
  togglePop.classList.toggle("active");
})