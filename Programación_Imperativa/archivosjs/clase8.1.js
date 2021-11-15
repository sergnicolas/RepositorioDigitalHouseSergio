            //Segundo ejercicio PFD//

function totalAPagar(vehiculo, litrosConsumidos) {
    if(vehiculo=="coche"){
        vehiculo= 86;
        //console.log(litrosConsumidos);
    }
    else if(vehiculo=="moto"){
        litrosConsumidos=70;
        //console.log(litrosConsumidos);
    }
    else if(vehiculo=="autobus"){
        litrosConsumidos=55;
        //console.log(litrosConsumidos);
    } 
    else (vehiculo=="vehiculoNoReconocido");

/*     if(litrosConsumidos<25 || litrosConsumidos>0){

    } */

    console.log("su "+vehiculo+" ha consumido "+litrosConsumidos+" litros y tiene que pagar: ");
}


totalAPagar("autobus",1);