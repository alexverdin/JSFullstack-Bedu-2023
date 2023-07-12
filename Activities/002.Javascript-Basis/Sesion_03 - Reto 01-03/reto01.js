/**
 * Dado el arreglo numbers compuesto solamente por números enteros mayores que cero,
 * obtener el promedio de todos sus elementos.
 */
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
let prom = 0;

for(let i=0; i<numbers.length; i++){
    prom += numbers[i];
}
prom = prom / numbers.length;

console.log("Promedio: " + prom);