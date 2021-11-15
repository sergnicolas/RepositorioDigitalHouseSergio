var a = 4
var b = 5
var c = 6

console.log("Valores del test "+ a + b + c )

function suma(a,b){
    return a+b
}


function resta(a,b,){
    let rresta = a-b
    return rresta
}

function multiplicar(a,b){
    let rmultip = a*b
    return rmultip

}

function dividir(a,b){
    let rdiv = a/b
    return rdiv

}

function sqofanumber(a){
    let squarer = multiplicar(a,a)
    return squarer
}

function promediode3(a,b,c){
    let promsuma = suma(suma(a,b),c)
    let rpromedio3 = dividir(promsuma,3)
    return rpromedio3
}

function CalcularPorcentaje(a,b){
    let stage1 = dividir(a,b)
    let stage2 = multiplicar(stage1,100)
    return stage2
}

console.log("testeo de operaciones calculadora")

console.log(suma(a,b))
console.log(resta(a,b))
console.log(multiplicar(a,b))
console.log(dividir(a,b))
console.log(dividir(a,b))
console.log(sqofanumber(a,b))
console.log(promediode3(a,b,c))
console.log(CalcularPorcentaje(a,b))



