var opis = document.querySelectorAll(".opis");
var zdjecie = document.querySelectorAll(".img-offer");

function show(i){
    opis[i].classList.toggle("d1");
    zdjecie[i].classList.toggle("blur");
}

var navbar = document.querySelector(".navbar");

window.setInterval(
    function(){
        if(window.pageYOffset>=220){
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    },10);
