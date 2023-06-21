let numA = 7;
let numB = 23;
let numC = 3;
let numD = 79;

let resultadoSuma = numA + numB;

let resultadoResta = numD - numC;

let resultadoFinal = resultadoSuma * resultadoResta;

let esPar = resultadoFinal % 2 === 0;

console.log(
   'Mis variables iniciales fueron: ' +
      numA +
      ', ' +
      numB +
      ', ' +
      numC +
      ' y ' +
      numD +
      '. La respuesta a verificar si el resultado final es par es: ' +
      esPar
);
