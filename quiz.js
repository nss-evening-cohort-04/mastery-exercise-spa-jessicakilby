//move this (below) to CarLot.js ===========================
function IfXHRFails() {
	var outputText = document.getElementById("output");
	outputText.innerHTML = `<div>We are having difficulties right now.</div>`;
}

function AfterFileLoaded() {

	var data = JSON.parse(this.responseText);
	var outputText = document.getElementById("output");
	var carData = "";
	var currentCar;

	for (var i = 0; i < data.cars.length; i++) {
		currentCar = data.cars[i];
		var carObjects = '<h2 class="make">'+currentCar.make+'</h2>';
		carObjects += '<h2 class="model">'+currentCar.model+'</h2>';
		carObjects += '<div class="year">Year: '+currentCar.year+'</div>';
		carObjects += '<div class="price">Price: $'+currentCar.price+'</div>';
		carObjects += '<div class="description">Discription: '+currentCar.description+'</div>';
		outputText.innerHTML += '<div class="carDiv col-xs-6 col-sm-4">'+carObjects+'</div>';
	};
//move this (above) to CarLot.js ===========================

	//move this (below) to cars.js------------------------------
	var theCarDivs = document.getElementsByClassName("carDiv");
	var inputText = document.getElementById("input");
	for (var i = 0; i < theCarDivs.length; i++) {
		theCarDivs[i].addEventListener("click", function(event) {
			descriptionDiv = this.childNodes[4];
			descriptionDiv.parentElement.classList.toggle("select");
			if(inputText.value === "Change car description"){
		      inputText.value = "";
		    } 
		    else if (inputText.value === ""){
		      inputText.value = "Change car description";
		    }; 
		    inputText.focus();
		    inputText.addEventListener("keyup", function(event){
		      descriptionDiv.innerHTML = inputText.value;
		    });
		});
	}
	function enterKeyPressed(keypress){
	  if (keypress.which === 13) {
	    inputText.value = "";
	  }
	}
	document.addEventListener("keypress", enterKeyPressed);
	//move this (above) to cars.js------------------------------

}

//move this (below) to CarLot.js or it should stay in quiz.js============
var myRequest = new XMLHttpRequest();
// console.log("myRequest", myRequest);
myRequest.addEventListener("error", IfXHRFails);
myRequest.addEventListener("load", AfterFileLoaded);
myRequest.open("GET", "inventory.json");
myRequest.send();
//move this (above) to CarLot.js or it should stay in quiz.js============

//I should move myRequest stuff into this function?++++++++++++++++++++++

function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();

// Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.
// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).
// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.
// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name of your choice (see behavior requirement 5 above).