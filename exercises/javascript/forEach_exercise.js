words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

let upperCase = [];
words.forEach((e, i, words) => {
    words[i] = e.toUpperCase();
});


var squareMe = [0, 1, 10, 24, 595]

squareMe.forEach((e, i, squareMe) => {
    squareMe[i] = Math.pow(e, 2);
})

var numbers = [5, 7, 9, 12, 20]
let num = 0;
numbers.forEach((e) => {
    num += e;
});
num = num / numbers.length;

var products = [
    { name: 'flower vase', price: 75 },
    { name: 'lamp', price: 85 },
    { name: 'jar of honey', price: 95 },
    { name: 'seashell frame', price: 65 },
    { name: 'lumber', price: 55 }
];

let price = []
products.forEach((e) => {
    price.push(e.price);
});
price.sort((a, b) => a - b);

// products.forEach((e, i, products) => {
//     products[i].discount = e.price / 2;
// });

products.forEach((e, i, products) => {
    if (i % 2 !== 0)
        products[i].discount = e.price / 2;
});

var myOrder = [
    ["beef", "turkey", "chicken", "veggie"],
    ["cheese", "pickles", "lettuce", "onion"],
    ["coke", "sprite", "iced tea", "water"]
];

// myOrder.forEach((e, i, myOrder) => {
//     myOrder[i].forEach((f, j) => {
//         if (j === 1)
//             console.log(f)
//     })
// });

words = ["A", "flock", "of", "crows", "is", "known", "as", "a", "murder"];

let myWords = words.map((e) => {
    return e.toUpperCase();
});

var doubleMe = [-1, 0, 5, 20, 43, 235];

let twice = doubleMe.map((e) => {
    return e * 2;
})

numbers = [2, 5, 7, 9, 33, 25, 66, 70]

let evens = numbers.map((e) => {
    return (e % 2 === 0) ? true : false;
})

var character = [
    { name: 'Mario', hatColor: 'red', health: 30 },
    { name: 'Luigi', hatColor: 'green', health: 25 },
    { name: 'Toad', hatColor: 'mushroom', health: 25 },
    { name: 'Wario', hatColor: 'yellow', health: 30 },
    { name: 'Yoshi', hatColor: null, health: 35 }
];

let charNames = character.map((e) => {
    return e.name;
})
let hat = character.map((e) => {
    return e.hatColor;
})

let attack = character.map((e) => {

})

console.log(hat);