/**
 * La criba de Eratóstenes consiste en una serie de pasos para enlistar
 * todos los números primos de un rango entre 2 y n.
 */

function criba(maxNum){
    // paso 1: Se enlistan los números de 2 a n, donde n es el último número a evaluar.
    let lista = [];
    let primos = [];

    for(let i=2; i<=maxNum; i++){
        lista.push(i);
    }

    // paso 2: Guardamos el primer número de la lista y lo borramos junto con sus múltiplos.
    do{
        primos.push(lista.shift());

        for(let i=0; i<lista.length; i++){
            if(lista[i] % primos[primos.length-1] === 0){
                delete(lista[i]);
            }
        }
        lista = lista.filter(e => e != undefined); //limpiamos la lista de los undefined

    // paso 3: revisamos si el cuadrado del siguiente número es mayor que nuestro número máximo
    // si es así, repetimos desde el paso 2
    }while(lista[0] * lista[0] < maxNum);
    

    // paso 4: cuando el cuadrado del último número almacenado en la lista, es mayor que el número máximo,
    // podemos decir que los números restantes son números primos y los almacenamos.
    for(let i=0; i<lista.length; i++){
        primos.push(lista[i]);
    }

    return primos;
}


console.table(criba(100));

