const colors = ['blue','black','purple'];
const newColors = [...colors];

console.log(newColors)

const book1 = {
    author : "Raymond E. Feist",
    title : "Fairy Tale",
    year : 1989
}

const book2 = {
    author2 : "T. Kingfisher",
    title2 : "A Wizard's Guide to Defensive Baking",
    year2 : 2020
}

const newBooks = {...book1, ...book2}
console.log(newBooks)