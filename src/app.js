/**
 * 
 * WRAPPERS
 * 
 */
const stepper = document.getElementById('stepper');
const greeting = document.getElementById('greeting');

/**
 * 
 * INPUTS
 * 
 */
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

/**
 * 
 * BUTTONS
 * 
 */
const nextBtn = document.getElementById('nextBtn');
const logInBtn = document.getElementById('logInBtn');
const goBackBtn = document.getElementById('goBackBtn');
const showPasswordBtn = document.getElementById('showPasswordBtn');
const hidePasswordBtn = document.getElementById('hidePasswordBtn');

const showPassword = (event) => {
  event.preventDefault();
  event.stopPropagation();

  passwordInput.type = "text";
  showPasswordBtn.classList.add('hidden');
  hidePasswordBtn.classList.toggle('hidden');
  // showPasswordBtn.style.display = "none";
  // hidePasswordBtn.style.display = "block";
};

const hidePassword = (event) => {
  event.preventDefault();
  event.stopPropagation();

  passwordInput.type = "password";
  showPasswordBtn.classList.remove('hidden');
  hidePasswordBtn.classList.toggle('hidden');
  // showPasswordBtn.style.display = "block";
  // hidePasswordBtn.style.display = "none";
};

// Alternativa al addEventListener
showPasswordBtn.onclick = showPassword;
hidePasswordBtn.onclick = hidePassword;