var CarLot = (function (carChoice) {

		for (var i = 0; i < theCarDivs.length; i++) {
		theCarDivs[i].addEventListener("click", carDivSelection);
	}

	carChoice.carDivSelection = function(event){
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
	}

	carChoice.enterKeyPressed = function(keypress){
	  if (keypress.which === 13) {
	    inputText.value = "";
	  }
	}
	document.addEventListener("keypress", enterKeyPressed);
  }

  return carChoice;

})(CarLot || {});

