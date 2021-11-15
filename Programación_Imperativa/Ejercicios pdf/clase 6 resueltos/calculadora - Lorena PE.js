
function sumar(numero1,numero2){
    return numero1 + numero2
}

function restar(numero1,numero2) {
    return numero1 - numero2    
}

function multiplicar(numero1,numero2) {
    return numero1 * numero2
}

function dividir(numero1,numero2) {
    return numero1/numero2
}

console.log("--------Testeo de Operaciones/Calculadora----------");

console.log(sumar(5,2));
console.log(restar(9,8));

console.log(multiplicar(5,4));

console.log(dividir(5,0));

function cuadradoDeUnNumero(nro) {
    multiplicar(nro,nro)
}


function promedioDeTresNumeros(numero1, numero2, numero3) {
    return dividir(sumar(sumar(numero1, numero2),numero3),3) 
}

console.log(promedioDeTresNumeros(2+2+2));

function calcularPorcentaje(nro,procentaje) {
    return dividir ((multiplicar(procentaje,nro)),100) +"%"
}

console.log(calcularPorcentaje(300,15));

function generadorDePorcentaje(parametro1,parametro2) {
    return multiplicar(dividir(multiplicar(parametro1,1), parametro2),100) + "%"
}
console.log(generadorDePorcentaje(3,150));

console.log("Lorena es muy aspera, se quemó las neuronas paras que tu no !!!!!");
