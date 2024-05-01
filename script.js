script.js // Login form handling
const loginForm = document.getElementById('login-form');
const passwordInputLogin = document.getElementById('password');
const passwordErrorLogin = document.getElementById('password-error');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = passwordInputLogin.value;

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePassword(password)) {
    passwordErrorLogin.textContent = 'Password must be at least 8 characters long and contain at least 1 capital letter and 1 number.';
    passwordErrorLogin.style.color = 'red';
    return;
  } else {
    passwordErrorLogin.textContent = '';
  }

  console.log('Login email:', email);
  console.log('Login password:', password);

  loginForm.reset();
});

const signupForm = document.getElementById('signup-form');
const passwordInputSignup = document.getElementById('password');
const passwordErrorSignup = document.getElementById('password-error');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = passwordInputSignup.value;

  if (!validatePassword(password)) {
    passwordErrorSignup.textContent = 'Password must be 8 characters or longer, with at least 1 uppercase letter and 1 number.';
    passwordErrorSignup.style.color = 'red';
    return;
  } else {
    passwordErrorSignup.textContent = '';
  }

  console.log('Sign-up username:', username);
  console.log('Sign-up email:', email);
  console.log('Sign-up password:', password);

  
  signupForm.reset();
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}


function validatePassword(password) {
  const passwordPattern = /^(?=.[A-Z])(?=.\d).{8,}$/;
  return passwordPattern.test(password);
}

passwordInputLogin.addEventListener('input', () => {
  passwordErrorLogin.textContent = '';
});

passwordInputSignup.addEventListener('input', () => {
  passwordErrorSignup.textContent = '';
});


function myFunction() {
  var x = document.querySelector(".navbar .menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}