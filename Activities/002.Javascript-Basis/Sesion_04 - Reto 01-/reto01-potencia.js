// Crea una función que devuelva la potencia n de un número X

function potencia(num, pow){
    let res = 1;

    for(let i=0; i<pow; i++){
        res = res * num;
    }

    return res;
}

function powRec(num, pow){
    if(pow <= 0){
        return 1;
    }
    return num * powRec(num, pow-1);
}
/** 
 *
num: 2
pow: 5
-> 32

num: 2
pow: 4
-> 16

num: 2
pow: 3
-> 8

num: 2
pow: 2
-> 4

num: 2
pow: 1
-> 2

num: 2
pow: 0
-> 1

 */

console.log(potencia(2,5));
console.log(powRec(2,5));