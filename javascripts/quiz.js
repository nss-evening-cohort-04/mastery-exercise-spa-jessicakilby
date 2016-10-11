var theCarDivs = document.getElementsByClassName("carDiv");
var inputText = document.getElementById("input");
var outputText = document.getElementById("output");

function populatePage (inventory) {
  // Loop over the inventory and populate the page
		console.log("inventory", inventory);
	
	for (var i = 0; i < 4; i++) {
		var carObjects = '<h2>'+inventory.make+'</h2>';
		carObjects += '<h2>'+inventory.model+'</h2>';
		carObjects += '<div>Year: '+inventory.year+'</div>';
		carObjects += '<div>Price: $'+inventory.price+'</div>';
		carObjects += '<div class="description">Discription: '+inventory.description+'</div>';
		outputText.innerHTML += '<div class="carDiv col-xs-6 col-sm-4">'+carObjects+'</div>';
	};

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
populatePage();