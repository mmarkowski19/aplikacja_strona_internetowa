
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 50 ||
document.documentElement.scrollTop > 60
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}


mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}