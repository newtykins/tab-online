const inp = document.getElementById('input');
const out = document.getElementById('output'); 

const interpret = () => {
	let output = '';
	let charCode = 0; 

	for(let i = 0; i < inp.value.length; i++) {
		const char = inp.value.charAt(i);

		// Cycle through ASCII character codes
		if (charCode >= 255) {
			charCode = 0;
		}

		// If there is a space, increase the ASCII counter
		if (char === ' ') {
			charCode++;
		}

		// If there is a tab, add the character at the current charCode to the output
		if (char === '	') {
			output += String.fromCharCode(charCode);
		}
	}

	out.value = output;
}
