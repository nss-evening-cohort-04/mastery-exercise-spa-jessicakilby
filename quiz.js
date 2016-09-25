function IfXHRFails() {
	var outputText = document.getElementById("output");
	outputText.innerHTML = `<div>We are having difficulties right now.</div>`;
}

function WhenChunksArrive() {

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
}



var myRequest = new XMLHttpRequest();
// console.log("myRequest", myRequest);

myRequest.addEventListener("error", IfXHRFails)
myRequest.addEventListener("load", AfterFileLoaded);
myRequest.addEventListener("progress", WhenChunksArrive)
myRequest.open("GET", "inventory.json")
myRequest.send();