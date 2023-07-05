/**
 * Precedencia de operadores.
 * Trata de obtener el resultado de cada operación antes de
 * ejecutar el script.
 */

var a = 5;
var b = 10;
var c = 15;


let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
/**
console.log((3 + b) * c / a * 2); // 78

console.log(((a + b * c) / 5) * 2); // 62

console.log(b / a + 2 * c); // 32

console.log((a + b + c / c) * a); // 80

console.log(((3 * a) / c) + a + b + c); // 31

console.log(a - (b + c) * a / 1); // -120
*/

console.log(2 || 'Hello World'); // asigna el primer valor desde la izquierda que sea verdadero (2, en este caso)

console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(sym2 == sym3); // false