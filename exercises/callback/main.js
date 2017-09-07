const performMath = (num1, num2, callback) => {
    return callback(num1, num2);
}

const add = (num1, num2) => {
    console.log(num1 + num2);
}

const subtract = (num1, num2) => {
    console.log(num1 - num2);
}

performMath(5, 5, add);

performMath(15, 5, subtract);