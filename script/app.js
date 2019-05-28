(() => {
	// set up the puzzle pieces and boards
	console.log('My JS issa workin!')

	// const is short for Constant -> variables that shouldn't change
	const piecesBoard = document.querySelector('.puzzle-pieces'),
		puzzleBoard = document.querySelector('.puzzle-board'),
		puzzleSelectors = document.querySelectorAll('#buttonHolder img'),
		dropZones = document.querySelectorAll('.drop-zone');

	let draggablePieces = piecesBoard.querySelectorAll("img");

	debugger;
	
	function switchImage() {
		console.log(this);
	}


	puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", switchImage); });

	// querySelectorAll selects all things that use that tag
	// the word "button" is a placeholder
	
	// loop through the draggable images
	// this lets us drag stuff => not that hard
	draggablePieces.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			console.log("draggin...");

			// dataTransfer has two methods, a setter and a getter
			// "set" data on the drag and "get" data on the drop
			e.dataTransfer.setData("text/plain", this.id);
		});
	});


	// this is the dragover and drop functionality => for the drop zones
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("dragged sumthin over me");
		});

		// allows a user to drop an element
		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you dropped sumthin on me");

			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log('you dragged: ', draggedElement);

			// add the image to the drop zone
			e.target.appendChild(document.querySelector(`#${draggedElement}`));
		});
	})

	// all of the console.log are used to make sure your code isn't breaking! Then if they do break, you know where
})();
