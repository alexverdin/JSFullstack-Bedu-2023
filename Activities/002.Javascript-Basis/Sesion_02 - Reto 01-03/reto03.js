/**
 * Crear un ciclo desde 0 hasta 100.
 * Mostrar todos los números primos en este ciclo con console.log()
 */



function esPrimo(primo){
    // los números negativos, el 0 y el 1 no se consideran números primos
    if(primo <= 1){
        return false;
    }

    for(let i = 2; i < primo; i++){
        if(primo % i === 0){
            return false;
        }
    }

    return true;
}

for(let num = 0; num <= 1000; num++){
    if(esPrimo(num)){
        console.log(num);
    }
}
