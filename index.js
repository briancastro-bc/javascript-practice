function addtion(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }

  return result;
}

const additionResult = addtion(10, 20, 60, 1000);

console.log("Resultado de la suma multiple", additionResult);