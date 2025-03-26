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
  /*if (user.matches('[A-Z]+$') && user.matches('[0-9]+$')){
    alert('yes')
  } else {
    alert('no')
  }*/
  alert(user.value)
}

