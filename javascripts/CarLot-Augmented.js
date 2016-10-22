var CarLot = (function (carChoice) {
    var inputText = document.getElementById("input");

    carChoice.carDivSelection = function(event){
        var theCarDivs = document.getElementsByClassName("carDiv");

        for (var i = 0; i < theCarDivs.length; i++) {
            theCarDivs[i].addEventListener("click", function(event){
            
            descriptionDiv = this.childNodes[4];
            $(theCarDivs).removeClass("select");
            descriptionDiv.parentElement.classList.toggle("select");

            inputText.value = "";
            inputText.focus();
            inputText.addEventListener("keyup", function(event){
              descriptionDiv.innerHTML = inputText.value;
            });
        }); 
        }   
    }

    carChoice.enterKeyPressed = function(keypress){
      if (keypress.which === 13) {
        inputText.blur();
        inputText.value = "";
      }
    }
    document.addEventListener("keypress", carChoice.enterKeyPressed);
  

  return carChoice;

})(CarLot || {});

