
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
const buttons = document.querySelectorAll('[same-btn]');
const nextBtn = document.getElementById('nextBtn');
const logInBtn = document.getElementById('logInBtn');
const goBackBtn = document.getElementById('goBackBtn');
const showPasswordBtn = document.getElementById('showPasswordBtn');
const hidePasswordBtn = document.getElementById('hidePasswordBtn');

const user = {
  name: "Brian",
  lastName: "Castro",
  email: "brian@mail.com",
  password: "12345",
};

const applyButtonStyles = () => {
  for (const button of buttons) {
    button.classList.add(
      'h-14', 
      'flex', 
      'justify-center', 
      'items-center', 
      'gap-x-2', 
      'w-full', 
      'py-4', 
      'bg-primary-alt', 
      'text-white', 
      'rounded-xl', 
      'font-medium', 
      'font-secondary-alt', 
      'shadow-sm'
    );
  }
};

let currentStep = 0;
const steps = stepper.getElementsByTagName('section');
// [section1 (html tag), section1 (html tag)]

const renderCurrentStep = () => {
  for (let index = 0; index <= steps.length; index++) {
    if (index === 1) {
      showNameInGreeting();
    }

    if (index === currentStep) {
      steps[index]?.classList?.remove('hidden');
    } else {
      steps[index]?.classList?.add('hidden');
    }
  }
};

const validateEmail = () => {
  const email = usernameInput?.value;
  /**
   * 
   * Validar si el email llega con valor
   * Validar si el email tiene un @
   * Validar si tiene minimo un (1) punto (.)
   * 
   */

  if (!email) return false; // no email
  if (!email.split('').includes('@')) return false; // no email contiene @
  if (!email.split('').includes('.')) return false; // 
  if (email !== user.email) return false;
  
  return true;
};

const nextStep = () => {
  currentStep++;
  // currentStep += 1;

  renderCurrentStep();
};

const previousStep = (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  currentStep--;
  // currentStep -= 1;

  renderCurrentStep();
};

const onNextStep = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const isValidEmail = validateEmail();
  return isValidEmail 
    ? nextStep() 
    : alert('El email es invalido');
}

nextBtn.onclick = onNextStep;
goBackBtn.onclick = previousStep;

const showNameInGreeting = () => {
  greeting.textContent = `Hello ${user.name} ${user.lastName}`;
};

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

async function loadPage() {
  applyButtonStyles();
  // const response = await fetch('https://rickandmortyapi.com/api/character');
  // const characters = await response.json();
  renderCurrentStep();
};

window.onload = loadPage;