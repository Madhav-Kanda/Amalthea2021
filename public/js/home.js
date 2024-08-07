// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: true })
// 	.add({
// 		targets: '.ml2 .letter',
// 		scale: [4, 1],
// 		opacity: [0, 1],
// 		translateZ: 0,
// 		easing: "easeOutExpo",
// 		duration: 950,
// 		delay: (el, i) => 70 * i
// 	}).add({
// 		targets: '.ml2',
// 		opacity: 0,
// 		duration: 1000,
// 		easing: "easeOutExpo",
// 		delay: 4000
// 	});


// Counting

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

// // For Event and Webinar Slider --Start
// const sliders = document.querySelectorAll(".carousel");
// sliders.forEach(slider => {

// 	const card = slider.querySelector(".carousel-list");
// 	const listelem = slider.querySelector(".carousel-list > li");
// 	const btnleft = slider.querySelector(".fa-angle-left");
// 	const btnright = slider.querySelector(".fa-angle-right");
// 	const carousel = slider.querySelector(".carousel-disp");
// 	let direction;

// 	btnleft.addEventListener("click", () => {
// 		if (direction === -1) {
// 			card.appendChild(card.firstElementChild);
// 			direction = 1;
// 		}
// 		card.style.transform = `translateX(${listelem.offsetWidth}px)`;
// 		carousel.style.justifyContent = 'flex-end';
// 	});
// 	btnright.addEventListener("click", () => {
// 		carousel.style.justifyContent = 'flex-start';
// 		if (direction === -1) {
// 			card.style.transform = `translateX(-${listelem.offsetWidth}px)`;
// 		}
// 		direction = -1;
// 	});

// 	card.addEventListener("transitionend", () => {
// 		if (direction === -1) {
// 			card.appendChild(card.firstElementChild);
// 		} else if (direction === 1) {
// 			card.prepend(card.lastElementChild);
// 		}
// 		// console.log("hello");

// 		card.style.transition = "none";
// 		card.style.transform = "translateX(0)";
// 		setTimeout(() => {
// 			card.style.transition = "all 1s ease";
// 		});

// 	});
// });
// // End


