const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Coming soon...';

const typing = function () {
	let indexText = 0;
	const time = 100;
	const addLetter = () => {
		spnText.textContent += txt[indexText];
		indexText++;
		if (indexText === txt.length) clearInterval(indexTyping);
	};

	const cursorAnimation = () => {
		spnCursor.classList.toggle('active');
	};

	const indexTyping = setInterval(addLetter, time);
	setInterval(cursorAnimation, 500);
};

// function animateElements() {
// 	const loader = document.querySelector('.loader');
// 	const wings = document.querySelectorAll('.wings');
// 	const halo = document.querySelector('#halo');
// 	const title = document.querySelector('.headings h1');
// 	const socials = document.querySelector('.links');
// 	const loaderTl = gsap.timeline();
// 	loaderTl.fromTo(wings, { x: '0%' }, { x: '20%' });
// }

// animateElements();
setTimeout(typing, 4500);

// gsap.from('.wings', {duration: 1, y:'-100%', ease:'power2.inOut'})
const loaderTl = gsap.timeline();
loaderTl.from('.title', {
	duration: 1.5,
	delay: 3,
	y: '-500%',
	ease: 'power2.inOut',
});
loaderTl.from(
	'.links',
	{ duration: 1.5, y: '500%', ease: 'power2.inOut' },
	'-=1.5',
);
