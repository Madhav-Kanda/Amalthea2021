let tl = gsap.timeline({repeat: -1, yoyo:"true"});
tl.to("#down-arrow", {y: 20, duration: 1, ease:"power1.inOut()",stagger: 0.1});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});