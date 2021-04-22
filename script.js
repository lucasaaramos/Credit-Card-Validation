var myInput = document.getElementById("credit");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the credit card input field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the credit card input field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the the credit card input field
myInput.onkeyup = function() {
  // Validate numbers
 
  var numbers = /^\d{4}[-. ]?\d{4}[-. ]?\d{4}[-. ]?\d{4}$/g;  // CHALLENGE: change this line here to include your regex for a 16 digit credit card number


  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  //    Note more on classlists can be found here: https://www.w3schools.com/jsref/prop_element_classlist.asp

}