const toggle = document.querySelector(".toggle-button");
const fullnav = document.querySelector(".full-nav");
const cancel = document.querySelector(".cancel");
// console.log(toggle, fullnav);

toggle.addEventListener("click",()=>{
	fullnav.style.transform = "translateX(0%)";
});

cancel.addEventListener("click",()=>{
	fullnav.style.transform = "translateX(100%)";
});