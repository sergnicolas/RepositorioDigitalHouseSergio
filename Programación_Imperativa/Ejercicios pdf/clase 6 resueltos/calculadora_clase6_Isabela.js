
function sumar(numero1,numero2) {
   return numero1+numero2
}

function restar(numero1,numero2) {
   return numero1 - numero2 
}

function multiplicar(numero1,numero2) {
    result = numero1 * numero2 
    return result
}

function dividir(numero1,numero2) {
   return numero1 / numero2 
}

function sumar3num(numero1,numero2,numero3) {
   suma3num=numero1+numero2+numero3 
   return suma3num
}

function cuadradoDeUnNumero(num1) {
   cuadrado = multiplicar(num1, num1)
   return cuadrado
}

function promedioDeTresNumeros(sumar3num) {
   promedio = suma3num / 3
   return promedio
}

function calcularPorcentaje(numTot, percent) {
   convertPercent = dividir(percent,100)
   procedure = multiplicar(numTot,convertPercent)
   return "El "+ percent + "% de " + numTot + " es " + procedure
}

function GeneradorDePorcentaje(numero1,numero2) {
   porcentaje1 = (numero1 * 100 ) / numero2
   return numero1 + " representa el " + porcentaje1 + "% de " + numero2  
}




console.log("---------------Testeo de operaciones/Calculadora---------------");

//console.log(sumar(5,5));

//console.log(restar(8,3));

//console.log(multiplicar(2,2));

//console.log(dividir(6,3));

//console.log(dividir(9,0));

//console.log(sumar3num(5,5,4))

//console.log(cuadradoDeUnNumero(2));

//console.log(promedioDeTresNumeros());

console.log(calcularPorcentaje(5000,20));

console.log(GeneradorDePorcentaje(10,200));



