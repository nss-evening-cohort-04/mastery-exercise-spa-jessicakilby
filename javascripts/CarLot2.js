var CarLot = (function (popPage) {
	popPage.populatePage = function (inventory) {
		
		for (var i = 0; i < inventory.length; i++) {
			var carObjects = '<h2>'+inventory[i].make+'</h2>';
			carObjects += '<h2>'+inventory[i].model+'</h2>';
			carObjects += '<div>Year: '+inventory[i].year+'</div>';
			carObjects += '<div>Price: $'+inventory[i].price+'</div>';
			carObjects += '<div class="description">Discription: '+inventory[i].description+'</div>';
			outputText.innerHTML += '<div class="carDiv col-xs-6 col-sm-4">'+carObjects+'</div>';
		};
	CarLot.carDivSelection();
	// CarLot.enterKeyPressed();
	}
	return popPage;
})(CarLot || {});