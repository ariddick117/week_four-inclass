(() => {
	// stub
	console.log('My JS Issa Working')

	let headline = document.querySelector("h1"),
		subhead = document.querySelector("h3");
		theButton = document.querySelector("button")

	// functions in the middle (what do you want to happen?)

	function changeText() {
		headline.textContent = "Now I'm Different!";
		subhead.textContent = "Hey Me Too!";
	}

	// function calls and event handling all goes at the bottom

	theButton.addEventListener("click", changeText)
})();