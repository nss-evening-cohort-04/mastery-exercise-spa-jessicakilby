var CarLot = (function (loadCars) {
  	var inventory = [];

    
	    loadCars.loadInventory = function (callback) {
	        var inventoryLoader = new XMLHttpRequest();

	        inventoryLoader.addEventListener("load", function () {
	        	inventory = JSON.parse(this.responseText);
	        	cars = inventory.cars;
	        	CarLot.populatePage(cars);
		    });

			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();
	    }
	    loadCars.getInventory = function () {
	    	return inventory;
	    }
    

return loadCars;
})(CarLot || {});

