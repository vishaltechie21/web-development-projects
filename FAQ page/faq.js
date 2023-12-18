var clicks = document.querySelectorAll(".ques");
var open = document.querySelectorAll(".ans")
clicks.forEach((click,index)=>{
    click.addEventListener("click",function(){
        open[index].classList.toggle("active");
       
        })
})