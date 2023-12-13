let istatus = document.querySelector("h5");
let addF = document.querySelector("#add");
let btn = document.querySelector("button")
let flag = 0;

addF.addEventListener("click", function () {
    if (flag == 0) {
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        console.log("hahahhha");
        flag = 1;
        btn.innerHTML = "Remove Friend";
        btn.style.color = "#111";
        btn.style.backgroundColor = "#dadada"; // Corrected property name
    } else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        flag = 0;
        btn.innerHTML = "Add Friend";
        btn.style.color = ""; // Corrected property name
        btn.style.backgroundColor = ""; // Reset the background color
    }
});
