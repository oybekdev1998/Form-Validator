const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Error function

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
// Success function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Check required fields

function checkRequired(inputArry) {
  inputArry.forEach(function (input) {
    console.log(input);
  });
};

// Valid email

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase()); 
  
};

// Event Listener

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
})
