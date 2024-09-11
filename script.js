var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var contacttext = document.querySelector("#contacttext");



home.addEventListener("click",function(){
    saaretexthtao();
    hometext.style.display = "block";
    hometext.style.width = "70%";
})

about.addEventListener("click",function(){
    saaretexthtao();
    abouttext.style.display = "block";
    abouttext.style.width = "70%";
})

contact.addEventListener("click",function(){
    saaretexthtao();   
    contacttext.style.display = "block";
    contacttext.style.width = "70%";
})

function saaretexthtao(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}