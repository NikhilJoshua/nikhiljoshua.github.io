function fillBarGraphs() {
	const barGraphs = document.querySelectorAll('.bar-value');
	console.log(barGraphs);
	barGraphs.forEach(element => {
		const value = element.getAttribute('data-value');
		element.style.setProperty('width', `${value}%`);
		element.innerHTML = `${value}%`;
		console.log(value,'aaaaa');
	});
}

window.addEventListener('DOMContentLoaded', fillBarGraphs);
