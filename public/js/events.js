// const evnt = require("../../seeds/event");
// import {evnt} from "../../seeds/event";
// const tileslist = document.querySelector(".magic-wall>ul");
const popup = document.querySelectorAll(".popup");
// let tiledata="";
// evnt.forEach((elem)=>{
// 	tiledata += `<li class="h-60 w-72 cursor-pointer"><img src="${elem.image}" alt="b2" class="object-cover h-full"></li>
// 	`;
// });
// tileslist.innerHTML = tiledata;

let toBeOpened=-1;

const tiles = document.querySelectorAll(".magic-wall>ul>li");
// console.log(tiles,popup);
for (let i = 0; i < tiles.length; i++) {
	tiles[i].addEventListener("click",()=>{
		console.log("pressed");
		toBeOpened = i;
		// document.querySelector(".about>.content").innerHTML = evnt[i].about;
		// document.querySelector(".struct>.content").innerHTML = evnt[i].eventstruct;
		// document.querySelector(".prizes>.content").innerHTML = evnt[i].prizes;
		// document.querySelector(".rules>.content").innerHTML = evnt[i].rules;
		// popup.style.display = "flex";
		if(toBeOpened!=-1){
			popup[toBeOpened].style.display = "flex";
		}
		console.log("opened");
	});
};


const closeButton = document.querySelectorAll(".bi-x-lg");
closeButton.forEach((elem)=>{
	elem.addEventListener("click",()=>{
		if(toBeOpened!=-1){
			popup[toBeOpened].style.display = "none";
			toBeOpened = -1;
			console.log("closed");
		}
	});
});
// if(toBeOpened!=-1){
// 	closeButton[toBeOpened].addEventListener("click",()=>{
// 		// if(popup[toBeOpened].contains(evnt.target)){
// 		popup[toBeOpened].style.display = "none";
// 		toBeOpened = -1;
// 		console.log("closed");
// 		// }
// 	});
// }


let tl = gsap.timeline({repeat: -1, yoyo:"true"});
tl.to("#blob1, #blob2", {y: 20, duration: 1, ease:"power1.inOut()",stagger: 0.1});