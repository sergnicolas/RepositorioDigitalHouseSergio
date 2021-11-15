// titulo: quien tiene el mayor numero de votos por ronda
// entrada: arrays 
// logica: 1) comparar el resultado de cada ronda del participante A con el B con un bucle 
//         2) con un if asignar un 1 a quien posee el numero mayor
// resultado: brindar la informacion de quien es el ganador con 2. 


const alicia = [23, 67, 32];
const bob = [12, 69, 43];

function encontrarGanador(a, b) {
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;

    for (let i = 0; i <= a.length; i++){
        if(a[i]>b[i]){
            puntosPrimerParticipante++;
        }
        else if (a[i]<b[i]){
            puntosSegundoParticipante++;
        }
    }
    if (puntosPrimerParticipante>puntosSegundoParticipante){
        return "El ganador es: alicia";
    }
    else if (puntosPrimerParticipante<puntosSegundoParticipante) {
        return "El ganador es: bob";
    }
    else  { 
        return "empate"
    }
}
console.log(encontrarGanador(alicia, bob));