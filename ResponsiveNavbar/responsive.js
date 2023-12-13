var items = document.querySelector(".items");
var nav = document.querySelector("#card");
var heading = document.querySelector("h1");
var btn = document.querySelector(".btn");

var isOpen = false;

btn.addEventListener("click", () => {
  if (!isOpen) {
    // Open properties
    btn.style.position = "absolute";
    btn.style.top = "20px";
    btn.style.right = "20px";
    nav.style.height = "350px";
    items.style.display = "flex";
    nav.style.display = "block";
    items.style.flexDirection = "column";
    items.style.alignItems = "center";
    items.style.gap = "40px";
    items.style.padding = "20px";

    isOpen = true;
  } else {
    // Close properties
    btn.style.position = ""; 
    btn.style.top = "";
    btn.style.right = "";
    nav.style.height = "";
    items.style.display = "";
    nav.style.display = "";
    items.style.flexDirection = "";
    items.style.alignItems = "";
    items.style.gap = "";
    items.style.padding = "";

    isOpen = false;
  }
});