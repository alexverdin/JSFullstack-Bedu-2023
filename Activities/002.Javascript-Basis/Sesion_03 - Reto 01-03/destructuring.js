// destructuring de un arreglo (por posicion):
const colors = ['blue','black','purple'];
const [a, b, c] = colors; // a='blue', b='black', c='purple'
console.log(b) // 'black'

// destructuring de un objeto (por llave):
const person = {
    name : "Alex",
    lastname : "Navarro",
    country : "Mexico" 
}
const {name: nombre, country, edad = 34} = person;
console.log(nombre); // 'Alex' (Si alguna de las llaves ya existe como variable, podemos renombrarla con la sintaxis "keyName: nuevoNombre")
console.log(edad); // 34 (si el valor no existe, la variable se crea con el valor definido en la destructuración. Sólo se usa si no encuentra la clave en el objeto.)
