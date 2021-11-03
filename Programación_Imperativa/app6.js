/* let edad = 21;
let operacion = edad % 2;

if (edad < 0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad < 18) {
  console.log("No puede entrar al bar");
} else if (edad > 18 && edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol");
} else if (edad == 21) {
  console.log("Felicitaciones, sos mayor de edad");
} else if (edad > 21) {
  console.log("Pasa maquina");
}

if (operacion == 1) {
    console.log("sabias que tu edad es impar?");
} */




function totalPagar(vehiculo, litrosConsumo){

    switch(vehiculo){
        case "coche":
        let cochePrecio = 86*litrosConsumo;
        return cochePrecio;
        break;
        case "moto":
        let motoPrecio = 70*litrosConsumo;
        return motoPrecio;
        break;
        case "autobus":
        let autobusPrecio = 55*litrosConsumo;
        return autobusPrecio;
        break;
    }
    if(litrosConsumo>0 && litrosConsumo<25){
        return cochePrecio = cochePrecio + 50;
    }

}
console.log(totalPagar("coche",5));










