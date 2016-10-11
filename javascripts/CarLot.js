var CarLot = (function () {
  	var inventory = [];

    return {
	    loadInventory: function (callback) {
	        var inventoryLoader = new XMLHttpRequest();

	        inventoryLoader.addEventListener("load", function () {
	        	inventory = JSON.parse(this.responseText);
	        	cars = inventory.cars;
	        	populatePage(cars);
		    });

			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();
	    },
	    getInventory: function () {
	    	return inventory;
	    }
    };

})();

