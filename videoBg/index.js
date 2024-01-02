const video = document.querySelector("video");
const btn = document.querySelector(".switch-btn");


btn.addEventListener("click", function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.play()
    }
    else{
        btn.classList.remove("slide");
        video.pause()
    }
})