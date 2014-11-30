function DecToHex() {
	var input = prompt("Enter a number", '');
	inputN = Number(input);
	if (isNaN(inputN) || (inputN < 0)) {
		alert("Incorrect input");
	}
	else {
		alert(inputN.toString(16).toUpperCase());
	}
}
