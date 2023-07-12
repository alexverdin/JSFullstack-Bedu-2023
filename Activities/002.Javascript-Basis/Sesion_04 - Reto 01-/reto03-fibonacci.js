/**
 * Completar la función fibonacciSequence la cuál recibe limit,
 * un entero positivo que representa la cantidad de elementos de la serie que queremos.
 */

function fibonacciSequence(limit){

    if(limit>1){
        return fibonacciSequence(limit-1) + fibonacciSequence(limit-2);
    }else if(limit == 1){
        return 1;
    }else if(limit == 0){
        return 0;
    }

}

const fibonacciSeq = limit => {
    const fib = [1,1];

    for(let i=2; i<limit; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    if(limit == 1){
        return 1;
    }else if(limit <= 0){
        return 0;
    }else{
        return fib;
    }
}

console.log(fibonacciSeq(4))