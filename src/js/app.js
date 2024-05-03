// 'use strict';
// alert("Adios mundo");

// // Comentarios en javascript
// // Comentarios de una sola linea
// /**
//  * 
//  * Comentarios
//  * de 
//  * multiples lineas
//  * 
//  */

// /**
//  * 
//  * Variables: una variable es un espacio en la memoria
//  * del ordenador que podrá cambiar durante la ejecución 
//  * del programa
//  * 
//  * sintaxis: var/let nombreVariable = valor_variable
//  * 
//  * 
//  * NO PUEDE TENER: espacios, no puede iniciar 
//  * con numeros, no puede caracteres especiales
//  */

// // Forma numero 1 de declarar variables
// // !DONT DO
// var némbreDeMiVariable = "hola mundo";
// // !DO
// // !RECOMENDADA

// var camelCase = "camelCase";

// var snake_case = "snake_case";
// var $foo = "foo";

// // !DON'T DO
// // var 1var = "my var";
// // var varíable = "mi variable";

// // // !CASE SENSITIVE
// var miNombreDeVariable = 5;
// var minombredevariable = 10;
// var MiNombreDeVariable = 15;
// var miNombredeVariable = 20;

// // camelCase = 10;

// // var bar = "foo";
// // var bar;
// // bar = "foo";

// // var foo = "bar";

// // let bar = "hola";

// // alert(bar);
// // let numberOne = 10;
// // let numberTwo = 20;

// // let result = parseInt(numberOne + numberTwo) / 2;

// /**
//  * 
//  * Tipos de datos (primitivos):
//  * string: nos permite almacenar valores alfanumericos y
//  * caracteres como palabras oraciones etc.
//  * 
//  */
// let myTextVariable = 'Armenia, As12';
// let myTextVariable2 = "Colombia, Latinoamerica";
// let myTextVariable3 = `
//   asdkljaskldjaskdjasd
//   asdkljaskldjaskdjasdasd
//   asdkljaskldjaskdjasdasdasd
//   asdasd
//   ${myTextVariable}
//   ${myTextVariable2}
// `;

// let myNumberOne;
// myNumberOne = 10;
// let myNumberTwo = 5.35;
// let myFloatNumber = 7.95;

// let myBooleanValue = true;
// let myBooleanValue2 = false;

// let myNull = null;
// let myUndefined = undefined;

// if (!myNull) {
//   console.log("Se imprime si myNull no tiene ningun valor");
// }

// let userNumberInput = parseInt(prompt("Ingresa un número: "));
// let userNumberInput2 = +prompt("Ingresa otro numero: ");

// /**
//  * 
//  * Operadores aritmetos en Javascript:
//  * + sirve para sumar
//  * * sirve multiplicar
//  * / sirve dividir
//  * - sirve para restar
//  * % sirve para sacar el residuo
//  * 
//  */
// let result;
// result = userNumberInput + userNumberInput2;
// result = userNumberInput * userNumberInput2;
// result = userNumberInput / userNumberInput2;
// result = userNumberInput - userNumberInput2;
// result = userNumberInput % userNumberInput2;

// let aritmeticOperation;
// aritmeticOperation = prompt("Ingresa la operación que deseas realizar: suma, resta, multiplicación, division ").toLowerCase();

// // let firstNumber = parseInt(prompt("Number one: "));
// // let secondNumber = parseInt(prompt("Number two: "));

// // let result;

// if (condicion) {
//   // QUE PASA SI ES TRUE
// } else if (condicion2) {
//   // QUE PASA SI ES FALSE LA CONDICION
// } else if (condicion3) {

// } else if (condicion4) {

// } else {

// }

// switch (age) {
//   case 17: {
//     console.log("Es menor de edad");
//     break;
//   }
//   case 18: {
//     console.log("Acabo de ser mayor de edad");
//     break;
//   }
//   default: {
//     console.log("Si no se cumple ningun case");
//     break;
//   }
// }

// // const ageActions = {
// //   17: () => {
// //     return "Es menor de edad";
// //   },
// //   18: () => {
// //     return "Acabo de ser mayor de edad";
// //   }
// // }

// // const ageResult = ageActions['17']()

// if (aritmeticOperation == "suma") {
//   result = firstNumber + secondNumber;
// }

// // if (aritmeticOperation == "resta") {
// //   result = firstNumber - secondNumber;
// // }

// // if (aritmeticOperation == "division") {
// //   result = firstNumber / secondNumber;
// // }

// // if (aritmeticOperation == "multiplicacion") {
// //   result = firstNumber * secondNumber;
// // }

// // document.write(`El resultado de la operacion ${aritmeticOperation} es: ${result}`);

// /**
//  *
//  * Funciones: una funcion es un bloque de código
//  * que contiene lógica en su interior y define un proceso
//  * que se va a realizar.
//  * 
//  * NOTA: no se ejecuta hasta que no se llama.
//  *  
//  */
// function sum(a, b) {
//   // a = 50
//   // b = 15
//   return a + b; // 65
// }

// let a = 15;
// let b = 20;

// const addition = (firstNumber, secondNumber) => {
//   return firstNumber + secondNumber;
// };

// // sum(a, b);

// function mul(a, b, c) {
//   return a * b * c;
// }

// // let result = mul(
// //   parseInt(prompt()),
// //   parseInt(prompt()),
// //   parseInt(prompt()),
// // )

// // document.write(`El resultado de la multiplicacion es: ${result}`);
// // document.write("<br>");
// // document.writeln(mul(1, 2, 3));

// /**
//  * 
//  * Scope o alcance de las variables
//  * 
//  */

// // const PI = 3.141618;

// // let valueToChange = PI * 2;

// function sumV2() {
//   let a = 5;
//   let b = 10;
//   let c = 15;

//   const childFunction = () => {
//     console.log(a);
//   }

//   childFunction();

//   let result = (a + b + c) + mul(5, 5, 5);
//   document.write("resultado de la suma es: " + result);
// }

// sumV2();

// console.log(a) // a = undefined;

// // sumV2();

// function convertNumberToString(number) {
//   if (typeof number === 'string') {
//     return null;
//   }

//   return number.toString();
// }

// // const/let
// const convertNumberToString = (number) => {
//   if (typeof number === 'string') {
//     return null;
//   }

//   return number.toString();
// }

// /**
//  * 
//  * CONSULTAR DIFERENCIAS ENTRE 
//  * ARROW FUNCTION Y FUNCTION
//  * 
//  * CONSULTAR LA DIFERENCIA ENTRE
//  * var Y let
//  * 
//  */

// // document.write(convertNumberToString("10"));
// const myName = "       Brian Castroooooo       ";
// const lastName = myName.replace("Castro", "Bedoya"); //       Brian Bedoyaooooo
// const myNameLength = (myName.trimStart()).length;

// // document.write(lastName);
// // document.write("<br>");
// // document.write(myNameLength);

// // function testFunction(...args) {
// //   console.log('this', this);
// //   console.log('arguments', arguments);
// // }

// // const testFunction2 = (...args) => {
// //   console.log('this in arrow function', this);
// //   console.log('arguments in arrow function', arguments);
// // }

// // testFunction("hola", "que", "mas");
// // testFunction2("alo", "alo", "alo");

// // let myFirstNumber = 2;
// // let mySecondNumber = 5;

// // let result = myFirstNumber ** mySecondNumber;

// // document.write("Resultado: " + result);

// // result = 1
// result++
// // result = 2

// // document.write("Resultado: " + result);

// result--
// // document.write("Resultado: " + result);

// let myFirstNumber = 5;
// myFirstNumber += 10; // myFirstNumber = 5 + 10;
// myFirstNumber -= 10;
// myFirstNumber *= 10;
// myFirstNumber /= 10;
// myFirstNumber %= 10;
// myFirstNumber **= 10; // myFirstNumber = myFirstNumber + 10;

// const myString = "10";
// const myNumber = 10;

// // document.write(+myString === myNumber); // verdadero o falso

// document.write("10" != 10); // falso
// document.write("10" !== 10); // verdadero
// document.write(10 > 5); // verdadero
// document.write(10 < 5); // falso
// document.write(10 <= 10); // verdadero
// document.write(10 >= 9); // verdadero
// document.write("<br>"); // verdadero
// /**
//  * 
//  * Operador/condicion ternaria: condicion ? true : false
//  * 
//  */
// document.write(18 < 19 ? "Es menor de edad" : "Es mayor de edad");

// let agePrompt = +prompt("Ingresa tu edad: "); // undefined || null

// let name = undefined ?? 'Default Value';
// let myAge = agePrompt ?? 0;
// // let hasDNI = false;
// // let age = 19;

// // document.write("<br>");
// document.write(hasDNI && age >= 18 ? "Es mayor de edad" : "Es menor de edad");
// document.write(hasDNI || age >= 18 ? "Es mayor de edad" : "Es menor de edad");
// // document.write(!hasDNI);

// // document.write("<br>");

// if (!false) { // true
//   document.write("No tiene nombre");
// } else {
//   document.write("Si tiene nombre " + name);
// }


// /**
//  * 
//  * Arrays: se podria un array es un almacen de valores o 
//  * variables.
//  * 
//  */

// let myList = ["Brian", 18, true, null];
// myList[1]; // 18
// myList[0]; // Brian
// // console.log(myList[2]);
// // console.log(myList)
// // myList[3] = "Castro";
// console.log(myList.length); // 4
// // myList[4] = "New value";
// // console.log(myList);
// // console.log(myList.length)

// // myList.unshift("New value");
// // myList.push("New value");

// // myList.splice(2, 3)
// // myList.slice(2);
// // console.log(myList.slice(2));

// let person = {
//   firstName: "Brian",
//   lastName: "Castro",
//   age: 40,
//   city: "Armenia",
//   pets: ["Cat", "Perro", "Bird"],
//   setAge: function (newAge) {
//     this.age = newAge;
//   }
// };

// person.firstName; // Brian
// person.lastName; // Castro
// person.age; // 40
// person.setAge(18);
// person.age; // 18

// // person.pets.push("Snake");

// // console.log(person);

// // person.setAge(20);

// // console.log(person);

// const myNumbersList = [2, 5, 7, 9, 11, 15];

// /**
//  * 
//  * Sintaxis del bucle for:
//  * 
//  * for (inicio; condicion; accion)
//  * 
//  */
// let multiplyNumber = 2;
// for (let index = 0; index <= 10; index++) {
//   console.log(`Tabla del ${multiplyNumber} x ${index} = ${multiplyNumber * index}`);
//   // console.log('Tabla del ' + multiplyNumber + " x " + index + " = " + multiplyNumber * index);
// }

// // numeroDeTabla = 2
// // longitud = 5
// // function tablaDeMultiplicar(numeroDeTabla, longitud) {
// //   console.log(`Tabla del ${numeroDeTabla}`);
// //   // index = 6
// //   // index <= longitud = verdadero
// //   // 2 x 5 = 10
// //   for (let index = 0; index <= longitud; index++) {
// //     console.log(`${numeroDeTabla} x ${index} = ${numeroDeTabla * index}`);
// //   }

// //   console.log("finaliza for");
// // }

// // tablaDeMultiplicar(10, 15);
// // tablaDeMultiplicar(5, 5);
// // tablaDeMultiplicar(450, 10);
// // tablaDeMultiplicar(2, 5);

// // function factorial(number) {
// //   if (number <= 1) {
// //     return number;
// //   }

// //   return number * factorial(number - 1);
// // }

// // console.log(factorial(4));
