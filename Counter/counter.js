// Get elements and store them in variables
const countDisplay = document.querySelector(".countDisplay");
const increaseBtn = document.querySelector(".increaseBtn");
const resetBtn = document.querySelector(".resetBtn");
const decreaseBtn = document.querySelector(".decreaseBtn");

// Function to increase the count
function increaseCount() {
  let currentValue = parseInt(countDisplay.textContent);
  let newValue = currentValue + 1;
  countDisplay.textContent = newValue;
}

// Function to decrease the count
function decreaseCount() {
  let currentValue = parseInt(countDisplay.textContent);
  let newValue = currentValue - 1;
  countDisplay.textContent = newValue;
}

// Function to reset the count
function resetCount() {
  countDisplay.textContent = "0";
}

// Event listeners for each button
increaseBtn.addEventListener("click", increaseCount);
decreaseBtn.addEventListener("click", decreaseCount);
resetBtn.addEventListener("click", resetCount);