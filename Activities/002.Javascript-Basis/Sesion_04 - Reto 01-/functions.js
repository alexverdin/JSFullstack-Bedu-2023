/** Function Expression: Funciones como expresiones */
const logName = function nombre(x){
    const name = x;
    console.log(name)
}
logName("Alex"); // "Alex"


/** IIFE (Immediately Invoked Function Expression):
 * Funciones que se ejecutan justo al ser definidas.
 */

(function(){
    const name = "John Doe";
    console.log(name);
})(); // "John Doe" [Los paréntesis son los que llaman a la función, el ';' ES REQUERIDO]

(function(lastName){
    const name = `James ${lastName}`;
    console.log(name);
})("Bond"); // IIFE con parámetros

