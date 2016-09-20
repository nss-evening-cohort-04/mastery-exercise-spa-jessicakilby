function IfXHRFails() {
	var outputText = document.getElementById('output');
	outputText.innerHTML = `<div>We are having difficulties right now.</div>`;
}

function WhenChunksArrive() {

}

function AfterFileLoaded() {
	var data = JSON.parse(this.responseText);
	// console.log("data", data);
	var outputText = document.getElementById('output');
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
}


var myRequest = new XMLHttpRequest();
// console.log("myRequest", myRequest);

myRequest.addEventListener("error", IfXHRFails)
myRequest.addEventListener("load", AfterFileLoaded);
myRequest.addEventListener("progress", WhenChunksArrive)
myRequest.open("GET", "inventory.json")
myRequest.send();