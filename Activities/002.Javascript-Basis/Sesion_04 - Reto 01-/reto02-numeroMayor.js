/** Completar la función getLargerInt
 * la cual recibe dos números enteros y retorna el número mayor de ellos.
 * */

const getLargerInt = (numA, numB) => {
    if(numA > numB){
        return numA;
    }else if(numA < numB){
        return numB;
    }else{
        return "Los números son iguales"
    }
}

console.log(getLargerInt(9,2));