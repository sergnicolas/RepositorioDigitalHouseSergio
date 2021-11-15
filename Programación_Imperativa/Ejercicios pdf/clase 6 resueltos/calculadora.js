 //Funciones

//Suma
function sumar(a, b) {
    return a + b;
}

//Resta
function restar(c, d) {
    return c - d;
}

//Multiplicacion
function multiplicar(e, f) {
    return e * f;
}

//División
function dividir(g, h) {
    return g / h;
}
console.log("-------------- Testeo de Operaciones / Calculadora --------------");

console.log("El resultado de 2+8 es: " + sumar(2,8));
console.log("El resultado de 8-10 es: " + restar(8,10));
console.log("El resultado de 5*3 es: " + multiplicar(5,3));
console.log("El resultado de 15/0 es: " + dividir(15,0));

// Funciones Extras

function cuadroDeUnNumero (x){
    return multiplicador(x,x);

}
console.log(cuadradoDeUnNumero(2))

function promedioDeTresNumeros (numA, numB, numC){
    return sumar(sumar(numA,numB),numC)/3
    
}
console.log();