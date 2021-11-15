// ====================================================== //
// ===================== calculadora ==================== //
// ====================================================== // 
let sumar = function(a,b){
    return a+b;
};

let restar = function(a,b){
    return a-b;
}

let multiplicacion = function(a,b){
    return a*b;
}

let dividir = function(a,b){
    return a/b;
} 
console.log("-------------- Testeo de Operaciones / Calculadora --------------");

let cuadradoDeUnNumero = function(a){
return multiplicacion(a,a);
}

let promedioDeTresNumeros = function (a,b,c) {
    let sumarAB = sumar (a,b);
    let sumarC = sumar (sumarAB,c);
    return sumarC / arguments.length;
} 

let calcularPorcentaje = function (a,b) {
    let primerPaso =  dividir(a,100);
    let segundoPaso = primerPaso*b;
    console.log(segundoPaso);
}


calcularPorcentaje(200,5);
