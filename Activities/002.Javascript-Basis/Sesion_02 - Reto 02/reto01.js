/**
 * Nuestro código tiene una pequeña falla, el día solo tiene 24 horas
 * y no se está tomando en cuenta el caso en el que time sea una hora inválida.
 * Crea un nuevo mensaje que será usado cuando time sea una hora que no existe en el día.
 */

const time = 50;
let greeting;

if(time < 0 || time > 24){
  greeting = "Hora no valida";
} else if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20) {
  greeting = "Good evening";
}

console.log(greeting) // Good afternoon