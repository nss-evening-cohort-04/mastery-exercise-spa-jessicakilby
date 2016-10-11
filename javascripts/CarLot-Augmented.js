var CarLot = (function (carChoice) {

        var inputText = document.getElementById("input");
    carChoice.carDivSelection = function(event){
        var theCarDivs = document.getElementsByClassName("carDiv");
        console.log("theCarDivs", theCarDivs);

        for (var i = 0; i < theCarDivs.length; i++) {
            theCarDivs[i].addEventListener("click", function(event){
            console.log("you clicket me", event);
            
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
    }

    carChoice.enterKeyPressed = function(keypress){
      if (keypress.which === 13) {
        inputText.value = "";
      }
    }
    document.addEventListener("keypress", carChoice.enterKeyPressed);
  

  return carChoice;

})(CarLot || {});

