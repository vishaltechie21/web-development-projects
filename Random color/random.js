const box = document.getElementById("box");
const changeBtn = document.querySelector(".change");

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

changeBtn.addEventListener('click', function() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.backgroundColor = randomColor;
});