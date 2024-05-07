function animateOnScroll(element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-bottom');
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(element);
  }

  document.querySelectorAll('*').forEach((element) => {
    animateOnScroll(element);
  });

  const signupForm = document.getElementById('signup-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!validateEmail(email)) {
      emailError.textContent = 'Invalid email address.';
      emailError.style.color = 'red';
      return;
    } else {
      emailError.textContent = '';
    }

    if (!validatePassword(password)) {
      passwordError.textContent = 'Password must be at least 8 characters long and contain at least 1 capital letter and 1 number.';
      passwordError.style.color = 'red';
      return;
    } else {
      passwordError.textContent = '';
    }

    const successMessage = document.createElement('div');
    successMessage.textContent = 'Successfully Signed up!';
    successMessage.style.color = 'green';
    document.body.appendChild(successMessage);

    setTimeout(function () {
      var ll=document.getElementById("username").value;
      window.location.href = 'Mainindex.html?user='+ll;
    }, 1000);
  });

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
  }

  emailInput.addEventListener('input', () => {
    emailError.textContent = '';
  });

  passwordInput.addEventListener('input', () => {
    passwordError.textContent = '';
  });