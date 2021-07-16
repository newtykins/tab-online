const inp = document.getElementById('input');
const out = document.getElementById('output'); 

const compile = () => {
	let letters = [];
	let lastCode = 0

	// For each character in the string
	for (let i = 0; i < inp.value.length; i++) {
		const code = inp.value.charCodeAt(i); // Get the character's code
		let compiledLetter = '';

		// If character code needs a cycle to be represented
		if (Math.sign(code - lastCode) === -1) {
			// Cycle to character code 0
			for (let j = 0; j < 255 - lastCode; j++) {
				compiledLetter += ' ';
			}

			// Add a blank character to mark the end of a cycle
			compiledLetter += '#';

			// Represent the character code
			for (let j = 0; j < code; j++) {
				compiledLetter += ' '
			}
		} else {
			// Represent the character code
			for (let j = 0; j < code - lastCode; j++) {
				compiledLetter += ' ';
			}
		}

		// Mark the end of the character, and update the last code
		compiledLetter += '	';
		lastCode = code;

		// Add the letter to the array
		letters.push(compiledLetter);
	}

	out.value = letters.join('');
}
