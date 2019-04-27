var opis = document.querySelectorAll(".opis");
var zdjecie = document.querySelectorAll(".img-offer");

function show(i){
    opis[i].classList.toggle("d1");
    zdjecie[i].classList.toggle("blur");
}