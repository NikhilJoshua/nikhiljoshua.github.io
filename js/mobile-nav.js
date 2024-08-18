document.addEventListener('DOMContentLoaded', () => {
	let isOpen = true;
	let menuIcon = document.getElementById('hamburger-icon');
	let menu = document.getElementById('menu');

	menuIcon.addEventListener('click', (e) => {

		menu.classList.toggle('mobile-display');
	} );

	menu.addEventListener('click', () => {
		setTimeout(() => {
			menu.classList.remove('mobile-display');
		}, 300);
	});

});
