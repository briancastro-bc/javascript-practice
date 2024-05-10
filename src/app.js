
/**
 * 
 * WRAPPERS
 * 
*/
const stepper = document.getElementById('stepper');
const greeting = document.getElementById('greeting');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

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
  password: "12345678",
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

const isValidEmail = () => {
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

const renderEmailError = () => {
  if (!usernameError?.getElementsByTagName('p')[0]) {
    const errorElement = document.createElement('p');
  
    const errorSpanElement = document.createElement('span');
    errorSpanElement.textContent = 'El formato del correo electr\u00f3nico es inv\u00e1lido';
  
    const errorIconElement = document.createElement('i');
    errorIconElement.classList.add('bx', 'bx-error', 'text-lg');
  
    errorElement.appendChild(errorIconElement)
    errorElement.appendChild(errorSpanElement);
  
    errorElement?.classList?.add(
      'flex', 
      'items-center', 
      'gap-x-2', 
      'text-sm', 
      'leading-4',
      'text-red-500', 
      'font-semibold', 
      'ml-2'
    );
  
    usernameError.appendChild(errorElement);
  
    usernameError.firstElementChild?.classList?.toggle('border-red-500');
    usernameError.firstElementChild?.firstElementChild?.classList?.toggle('text-red-500');
  }
};

const unrenderEmailError = () => {
  usernameError?.firstElementChild?.classList?.remove('border-red-500');
  usernameError?.firstElementChild?.classList?.toggle('border-primary-alt');

  usernameError?.firstElementChild?.firstElementChild?.classList?.remove('text-red-500');
  usernameError?.firstElementChild?.firstElementChild?.classList?.toggle('text-primary-alt');

  if (usernameError.getElementsByTagName('p')[0]) {
    usernameError?.lastElementChild?.remove();
  }
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
  unrenderEmailError();
};

const onNextStep = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const validEmail = isValidEmail();
  if (!validEmail) {
    renderEmailError();
    return;
  }

  unrenderEmailError();
  nextStep();
}

nextBtn.onclick = onNextStep;
goBackBtn.onclick = previousStep;

const showNameInGreeting = () => {
  greeting.textContent = `Hello ${user.name} ${user.lastName}`;
};

const isValidPassword = () => {
  const password = passwordInput?.value;

  const invalidPasswordResponse = [];

  /**
   * 
   * Cantidad de caracteres
   * Que coincida con la almacenada
   * Que coincida tanto email como contraseña
   * 
   */
  // if (password?.length < 8) return [false, 'La contraseña tiene menos de 8 caracteres'];
  if (password?.length < 8) {
    invalidPasswordResponse.push('la contra tiene menos de 8 caracteres');
  }
  // if (password !== user?.password) return [false, 'La contraseña no coincide'];
  if (password !== user?.password) {
    invalidPasswordResponse.push('la contraseña no coincide');
  }
  // if (password !== user?.password && usernameInput?.value !== user?.email) return [false, null];

  return invalidPasswordResponse;
};

const onLogIn = () => {
  // TODO: mostrar mensajes de error de la contraseña debajo
  // del input de la contraseña como una lista, dependiendo de la cantidad
  // de errores que haya
  const passwordErrors = isValidPassword();

  if (passwordErrors?.length > 0) {
    for (const error of passwordErrors) {
      console.log('error', error);
    }
  } else {
    alert(`Bienvenido de nuevo ${user?.name}`);
  }

  // return validPassword 
  //   ? alert(`Bienvenido de nuevo ${user?.name}`)
  //   : console.log(message ?? 'La contraseña es incorrecta');
};

logInBtn.onclick = onLogIn;

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