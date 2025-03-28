    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let submit = document.querySelector('button');
submit.addEventListener('click',verifyAlphaNum)


function verifyAlphaNum(){
  let user = document.getElementById('inputField')

  if (user.validity.valueMissing){
    user.setCustomValidity('Please input an alphanumeric value!');
  } else if ((/^[a-z0-9A-Z]+$/.test(user.value))){
    user.setCustomValidity('INPUT SUBMITTED!')
  } else {
    user.setCustomValidity('Input is not an alphanumeric value!')
  }
}

