/**
 * 
 * Obtener referencia a un elemento de html desde JS
 * 
 */
// Paso 2. Obtenemos los elementos desde javascript
const incremenetElement = document.getElementById("increment");
const countElement = document.getElementById("count");
const decrementElement = document.getElementById("decrement");

/**
 * 
 * Formas de obtener elementos desde el DOM.
 * getElementById();
 * 
 * 
 */
const myLinkElement = document.getElementById('myLink');
console.log('link element', myLinkElement);

myLinkElement.addEventListener('click', (event) => {
  console.log('evento', event);
  
  if (myLinkElement.classList.contains('bg-red-500')) {
    myLinkElement.classList.remove('bg-red-500');
  } else {
    myLinkElement.classList.add('bg-red-500');
  }
  // myLinkElement.href = "https://facebook.com";
  // myLinkElement.target = "_blank";

  // myLinkElement.style.fontSize = "24px";
});

myLinkElement.addEventListener('mouseenter', () => {
  myLinkElement.style.fontSize = "24px";
});

myLinkElement.addEventListener('mouseleave', () => {
  myLinkElement.style.fontSize = "16px";
});

// ARREGLO DE 2 elementos HTML: [link1, link1];
const myLinksByClassName = document.getElementsByClassName('my-link');
console.log('elements by className', myLinksByClassName);

// for (let index = 0; index <= myLinksByClassName?.length; index++) {
//   myLinksByClassName[index].textContent = `Link ${index}`;

//   if (index % 2 == 0) {
//     myLinksByClassName[index].classList.add('p-4', 'bg-red-500');
//   } else {
//     myLinksByClassName[index].classList.add('p-4', 'bg-blue-500');
//   }
// }

// Paso 4. Definimos el contador que va a almacenar el valor
let count = 0;

// Paso 5. Creamos las funciones que van a cambiar el contador
// y asignamos el valor del contador al elemento previamente
// creado
function increment() {
  count += 1;
  countElement.innerText = count;
}

function decrement() {
  count -= 1;
  countElement.innerText = count;
}

countElement.innerText = "Hola Mundo"

// Paso 3. Agregamos los escuchadores del evento click para
// elemento
incremenetElement.addEventListener("click", increment);
decrementElement.addEventListener("click", decrement);

const themeBtn = document.getElementById('themeBtn');

const toggleTheme = async () => {
  await fetchAllRickAndMortyCharacters();

  const isDarkTheme = document.documentElement.classList.contains('dark');
  return isDarkTheme ? 
    document.documentElement.classList.remove('dark') :
    document.documentElement.classList.add('dark');
}

const fetchAllRickAndMortyCharacters = async () => {
  // TAREA CONSULTAR QUE HACE ESTA INFO
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const characters = await response.json();

  for (const character of characters.results) {
    const characterElement = document.createElement('div');
    characterElement.textContent = character?.name ?? 'Unnamed Character';

    myLinkElement.appendChild(characterElement);
  }

  console.log('personajes de rick and morty', characters);
}

themeBtn.addEventListener('mouseenter', toggleTheme);









const btnElement = document.getElementById("btn");

let counter = 1;

btnElement.addEventListener("click", () => {
  const colors = [
    'red', 
    'blue', 
    'green', 
    'yellow', 
    'purple',
  ];

  const randomNumber = Math.floor(Math.random() * colors.length);
  btnElement.style.backgroundColor = colors[randomNumber];
});


const fontBtnElement = document.getElementById('fontBtn');
const fontElement = document.getElementById('font');

let currentFontSize = 16;

const incrementFontSize = () => {
  currentFontSize++;

  const result = `${currentFontSize}px`;
  fontElement.style.fontSize = result;
  fontElement.innerText = result;
};

fontBtnElement.addEventListener("click", incrementFontSize);


fetch('../mockup.json')
  .then(async response => {
    const result = await response.json();
    console.log('mockup', result);
  });