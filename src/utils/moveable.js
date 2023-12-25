export function moveable() {
	var obj,
		x,
		y,
		prev_x,
		prev_y,
		scale = 1;

	function resetZIndex() {
		// Reset the z-index of all elements with class 'ball' to 0
		const balls = document.querySelectorAll('.ball');
		balls.forEach((ball) => {
			ball.style.zIndex = '0';
		});
	}

	function isDescendant(child, parent) {
		// Check if 'child' is a descendant of 'parent'
		let node = child.parentNode;
		while (node !== null) {
			if (node === parent) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	}

	function scaleElementfun(element, factor) {
		scale *= factor;
		element.style.transform = `scale(${scale})`;
	}

	function dragStart(e) {
		const ballElement = e.target.closest('.ball');

		if (ballElement) {
			resetZIndex(); // Reset the z-index of all elements
			ballElement.style.zIndex = '1'; // Set z-index to 1 for the clicked element

			obj = ballElement;
			e.preventDefault(); // Prevent default behavior
			prev_x = x - obj.offsetLeft;
			prev_y = y - obj.offsetTop;
			obj.style.boxShadow =
				'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px';
			obj.style.userSelect = 'none';
			obj.style.webkitUserSelect = 'none';
			obj.style.MozUserSelect = 'none';
			obj.style.msUserSelect = 'none';
		} else {
			const isInsideIframe = isDescendant(e.target, document.querySelector('.iframe'));
			if (isInsideIframe) {
				// Stop dragging if the click is inside the iframe
				obj = null;
				return;
			}

			obj = null; // Reset obj if the clicked element is not .ball or its descendant
		}
	}

	function move(e) {
		if (e.pageX) {
			x = e.pageX;
			y = e.pageY;
		}

		if (obj) {
			obj.style.left = x - prev_x + 'px';
			obj.style.top = y - prev_y + 'px';
		}
	}

	function dragEnd() {
		if (obj) {
			obj.style.boxShadow = '';
			obj.style.userSelect = '';
			obj.style.webkitUserSelect = '';
			obj.style.MozUserSelect = '';
			obj.style.msUserSelect = '';
			obj = null;
		}
	}

	document.addEventListener('mousedown', dragStart);
	document.addEventListener('mousemove', move);
	document.addEventListener('mouseup', dragEnd);
}
