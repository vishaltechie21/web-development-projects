document.addEventListener("DOMContentLoaded", function () {
    const greenCircle = document.querySelector(".circle");
    const buttons = document.querySelectorAll(".button");
    const input = document.querySelector("#input");
    const delbtn = document.querySelector(".delete");
    let rotationDegree = 0;

    delbtn.addEventListener("click", () => {
        // Get the current value of input
        let currentValue = input.value;

        if (currentValue.length > 0) { // Check if there is at least one character
            // Remove the last character
            let newValue = currentValue.slice(0, -1);
            input.value = newValue;
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the value of the clicked button
            const buttonValue = button.textContent;

            // Append the button value to the input field
            input.value += buttonValue;

            // Toggle the "rotate" class to change rotation direction
            greenCircle.classList.toggle("rotate");
        });
    });


    const myButton = document.getElementById("myButton");

    myButton.addEventListener("click", function () {
        // Specify the phone number you want to dial
        const phoneNumber = "+1234567890"; // Replace with the desired phone number

        // Use the "tel" URI scheme to initiate the call
        window.location.href = `tel:${phoneNumber}`;
    });
});
