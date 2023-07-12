/**
 * Para este reto vamos a tomar un arreglo con pares [key, value]
 * y crear un objeto con sus respectivas propiedades y valores.
 */

const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]];

const obj = {};
for(let i=0; i<car.length; i++){
    obj.car[i][0] = car[i][1];
}

console.log(obj)