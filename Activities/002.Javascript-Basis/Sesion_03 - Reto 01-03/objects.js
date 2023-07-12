const john = {
    firstName : "John",
    lastName : "Doe",
    birthYear : 1994
}

const john2 = {
    lastName : "Doe",
    birthYear : 1994,
    firstName : "John"
}

// from object to array
const car = {
    brand : "Nissan",
    model : "Versa",
    year : 2023
}

const keys = Object.keys(car);
console.log(keys); // ['brand','model','year']

const pairs = [];
for(let i=0; i<keys.length; i++){
    pairs.push([keys[i], car[keys[i]]]);
}
console.log(pairs);

const pairs2 = [];
for(key of keys){
    pairs2.push([key, car[key]])
}
console.log(pairs2)

const pairs3 = [];
for(property in car){
    pairs3.push([property, car[property]])
}
console.log(pairs3)