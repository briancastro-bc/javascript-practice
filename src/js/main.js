/**
 * 
 * Obtener referencia a un elemento de html desde JS
 * 
 */
// Paso 2. Obtenemos los elementos desde javascript
const incremenetElement = document.getElementById("increment");
const countElement = document.getElementById("count");
const decrementElement = document.getElementById("decrement");

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