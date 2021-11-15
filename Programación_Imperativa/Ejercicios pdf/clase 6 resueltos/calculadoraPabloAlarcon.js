function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}
function multiplicacion(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

console.log(suma(25, 15));
console.log(resta(25, 15));
console.log(multiplicacion(25, 15));
console.log(division(25, 15));
console.log(division(25, 0));

function cuadradoDeUnNumero(num1) {
  return multiplicacion(num1, num1);
}

function promedioDeTresNumeros(num1, num2, num3) {
  let num4 = suma(num1, num2);
  let los3 = suma(num4, num3);
  let promedio = division(los3, 3);
  return promedio;
}

console.log(promedioDeTresNumeros(40, 20, 65));

function calcularPorcentaje(num1,num2){
    let divi = division(num1, 100);
    let porcentaje = multiplicacion(divi,num2);
    return porcentaje;
}

console.log(calcularPorcentaje(300,15));

function generadorDePorcentaje(num1,num2){
    let multi = multiplicacion(num1, 100);
    let porcentaje = division(multi,num2);
    return porcentaje;
}
console.log(generadorDePorcentaje(2,200));