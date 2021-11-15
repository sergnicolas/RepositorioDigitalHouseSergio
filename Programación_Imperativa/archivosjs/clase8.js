            //switch solo//

/* var Animal = "perro";
switch (Animal) {
case "Vaca":
case "Jirafa":
    console.log("Este animal subirá al Arca de Noé.");
case "perro":
    console.log("otro animal");
break;
case "Dinosaurio":
default:
    console.log("Este animal no lo hará.");
} */

            // function + switch con variable //

/* let dia = "jueves";
function saludoDia(dia) {
switch (dia) {
case "viernes":
    console.log("buen finde");
break;
case "lunes":
    console.log("buena semana");
break;
default:
    console.log("buen dia");
} }

saludoDia(); */

            //function + switch sin varible  //

/* function saludoDia(dia) {
switch (dia) {
case "viernes":
    console.log("buen finde");
break;
case "lunes":
    console.log("buena semana");
break;
default:
    console.log("buen dia");
} }

saludoDia("jueves"); */

            //function + switch con return//
/* function saludoDia(dia) {
switch (dia) {
case "viernes":
    return "buen finde";
break;
case "lunes":
    return "buena semana";
break;
default:
    return "buen dia";
} 
}
console.log(saludoDia("jueves")); */

            //ejercicio playground//

/* let dia = "viernes";
function finDeSemana(dia) {
switch (dia) {
case "viernes":
    console.log("buen finde");
break;
case "lunes":
    console.log("buena semana");
break;
default:
    console.log("buen dia");
} }
finDeSemana(dia); */


            //ejercicio playground 2//
/* function tengoClases(dia) {
	switch (dia) {
    	case "lunes":
        case "miercoles":
        case "viernes":
            console.log("tenés clase");
        break;
        default:
            console.log("no tenes clase");
	}
}

tengoClases("viernes"); */

            //Function de if else = Primer ejercicio PFD//
let edad = 21;
function condicionesIngresoBar(edad){
if(edad<=0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
}
if(edad<18) {
console.log("No puede pasar al bar.")
}
else if(edad<21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.") 
}

else if(edad==21){
console.log("felicitaciones, sos mayor de edad, puede pasar");
}

else{
console.log("Puede pasar al bar y tomar alcohol.")
}
}
condicionesIngresoBar(edad);
