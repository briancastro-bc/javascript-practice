'use strict';
// alert("Adios mundo");

// Comentarios en javascript
// Comentarios de una sola linea
/**
 * 
 * Comentarios
 * de 
 * multiples lineas
 * 
 */

/**
 * 
 * Variables: una variable es un espacio en la memoria
 * del ordenador que podrá cambiar durante la ejecución 
 * del programa
 * 
 * sintaxis: var/let nombreVariable = valor_variable
 * 
 * 
 * NO PUEDE TENER: espacios, no puede iniciar 
 * con numeros, no puede caracteres especiales
 */

// Forma numero 1 de declarar variables
// var némbreDeMiVariable = "hola mundo";
// // !DO
// var camelCase = "camelCase";
// var snake_case = "snake_case";
// var $foo = "foo";

// // !DON'T DO
// // var 1var = "my var";
// // var varíable = "mi variable";

// // !CASE SENSITIVE
// var miNombreDeVariable = 5;
// var minombredevariable = 10;
// var MiNombreDeVariable = 5;
// var miNombredeVariable = 5;

// camelCase = 10;

// // var bar;
// // bar = "foo";

// var foo = "bar";

// let bar = "hola";

// alert(bar);
// let numberOne = 10;
// let numberTwo = 20;

// let result = parseInt(numberOne + numberTwo) / 2;

/**
 * 
 * Tipos de datos (primitivos):
 * string: nos permite almacenar valores alfanumericos y
 * caracteres como palabras oraciones etc.
 * 
 */
let myTextVariable = 'Armenia, As12';
let myTextVariable2 = "Colombia, Latinoamerica";
let myTextVariable3 = `
  asdkljaskldjaskdjasd
  asdkljaskldjaskdjasdasd
  asdkljaskldjaskdjasdasdasd
  asdasd
  ${myTextVariable}
  ${myTextVariable2}
`;

let myNumberOne;
myNumberOne = 10;
let myNumberTwo = 5.35;
let myFloatNumber = 7.95;

let myBooleanValue = true;
let myBooleanValue2 = false;

let myNull = null;
let myUndefined = undefined;

// let userNumberInput = parseInt(prompt("Ingresa un número: "));
// let userNumberInput2 = parseInt(prompt("Ingresa otro numero: "));

/**
 * 
 * Operadores aritmetos en Javascript:
 * + sirve para sumar
 * * sirve multiplicar
 * / sirve dividir
 * - sirve para restar
 * % sirve para sacar el residuo
 * 
 */
// let result = userNumberInput % userNumberInput2;

// let aritmeticOperation;
// aritmeticOperation = prompt("Ingresa la operación que deseas realizar: suma, resta, multiplicación, division ").toLowerCase();

// let firstNumber = parseInt(prompt("Number one: "));
// let secondNumber = parseInt(prompt("Number two: "));

// let result;

// if (aritmeticOperation == "suma") {
//   result = firstNumber + secondNumber;
// }

// if (aritmeticOperation == "resta") {
//   result = firstNumber - secondNumber;
// }

// if (aritmeticOperation == "division") {
//   result = firstNumber / secondNumber;
// }

// if (aritmeticOperation == "multiplicacion") {
//   result = firstNumber * secondNumber;
// }

// document.write(`El resultado de la operacion ${aritmeticOperation} es: ${result}`);

/**
 *
 * Funciones: una funcion es un bloque de código
 * que contiene lógica en su interior y define un proceso
 * que se va a realizar.
 * 
 * NOTA: no se ejecuta hasta que no se llama.
 *  
 */
function sum(a, b) {
  // a = 50
  // b = 15
  return a + b; // 65
}

function mul(a, b, c) {
  return a * b * c;
}

// let result = mul(
//   parseInt(prompt()),
//   parseInt(prompt()),
//   parseInt(prompt()),
// )

// document.write(`El resultado de la multiplicacion es: ${result}`);
// document.write("<br>");
// document.writeln(mul(1, 2, 3));

/**
 * 
 * Scope o alcance de las variables
 * 
 */

// const PI = 3.141618;

// function sumV2() {
//   let a = 5;
//   let b = 10;
//   let c = 15;

//   let result = (a + b + c) + mul(5, 5, 5);
//   document.write("resultado de la suma es: " + result);
// }

// sumV2();

// function convertNumberToString(number) {
//   if (typeof number === 'string') {
//     return null;
//   }

//   return number.toString();
// }

// const/let
const convertNumberToString = (number) => {
  if (typeof number === 'string') {
    return null;
  }

  return number.toString();
}

/**
 * 
 * CONSULTAR DIFERENCIAS ENTRE 
 * ARROW FUNCTION Y FUNCTION
 * 
 * CONSULTAR LA DIFERENCIA ENTRE
 * var Y let
 * 
 */

// document.write(convertNumberToString("10"));
const myName = "       Brian Castroooooo       ";
const lastName = myName.replace("Castro", "Bedoya");
const myNameLength = (myName.trim()).length;

document.write(lastName);
document.write("<br>");
document.write(myNameLength);