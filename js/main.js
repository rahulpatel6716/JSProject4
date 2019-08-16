


// Declaration of variables for all Elements //
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var locations = document.getElementById("locations");
var email = document.getElementById("mail");




// Add Event Listener for email // 
email.addEventListener("input", function (event) {

  // If loop to validate user enter right email address //
  if(emial.validity.typeMismatch){
    email.setCustomValidity("Enter@sample.com");
} else {
  email.setCustomValidity("");
}
});


// add event listener for email to see user enter value //
email.addEventListener("invalid", () => {

  // If loop through //
  if(email.value === ""){
    email.setCustomValidity(" Enter your Email Address Here!!");
  } else {
    email.setCustomValidity("");
  }
 
});



// Add event listener for name filed for validation that user enter a value //
firstName.addEventListener("invalid", () => {

  // If loop through //
  if(firstName.value === ""){
    firstName.setCustomValidity(" Please Enter Your Name Here!!");
  } else {
    firstName.setCustomValidity("");
  }
 
});

// Add event listener for location //
locations.addEventListener("invalid", () => {

  // If loop for validate location //
  if(locations.value === ""){
    locations.setCustomValidity(" Please enter your location here!!");
  } else {
    locations.setCustomValidity("");
  }
 
});


// Add event listener for age to validate //
age.addEventListener("invalid", () => {

  // If loop for validate age //
  if(age.value === ""){
    age.setCustomValidity("Enter your age here!!");
  } else {
    age.setCustomValidity("");
  }
 
});
