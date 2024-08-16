function getElementId(e) {
	return e.getAttribute('id');
}

function addActiveClass(id) {
	document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
}

function removeActiveClass(id) {
	document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
}

function highlightTopSection() {
    const sections = document.querySelectorAll('section');
	const threshold = parseFloat(getComputedStyle(document.body).getPropertyValue('--top-offset'));

	let currentlyHighlighted = null;
    function updateHighlight() {
        let topmostSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

			// Check if the element is within the viewport and its top is >= 0 (visible)
            if (rect.top >= 0 && rect.top < ( (threshold * 16 ) + 10)) {
                if (!topmostSection || rect.top < topmostSection.getBoundingClientRect().top) {
                    topmostSection = section;
                }
            }
        });

        // Highlight the topmost section that is still visible in the viewport
        if (topmostSection && topmostSection !== currentlyHighlighted) {
            if (currentlyHighlighted) {
				let id = getElementId(currentlyHighlighted);
                removeActiveClass(id);
            }
			let id = getElementId(topmostSection);
			addActiveClass(id);
            currentlyHighlighted = topmostSection;
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', updateHighlight);

    // Initial highlight in case the page is already scrolled
    updateHighlight();
}

window.addEventListener('DOMContentLoaded', highlightTopSection);
