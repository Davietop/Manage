let bar = document.querySelector(".bar")
let links = document.querySelector(".nav-links")



bar.addEventListener("click", function(){
    bar.classList.toggle("change")
    links.classList.toggle("show")
})