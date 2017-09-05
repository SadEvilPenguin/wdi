//Number 1 complete
var i = 0;
while (i < 1000) {
    console.log(i);
    i++;
};

//Number 2 complete
for (var i = 999; i >= 0; i--) {
    console.log(i);
};

const directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"]
    //Number 3 complete
for (var i = 0; i < directors.length; i++) {
    console.log(directors[i]);
};

//Number 4 complete
for (var i = 0; i < directors.length; i++) {
    console.log("Hi, " + directors[i]);
};

//Number 5 complete
function isCool(name) {
    console.log(name + " is super cool");
}

//number 6 complete
function twoLengths(str1, str2) {
    var strLength = [];
    strLength[0] = str1.length;
    strLength[1] = str2.length;
    console.log(strLrngth);
}

//number 7 complete
function transmogrifier(a, b, c) {
    let tot = a * b;
    tot = Math.pow(tot, c);
    return tot;
}

//number 8 complete
for (let i = 1; i <= 100; i++) {
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("Fizzbuzz");
    } else if ((i % 3) === 0) {
        console.log("Fizz");
    } else if ((i % 5) === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//number 9 complete
function wordReverse(str) {
    var reversed = str.split(' ').revers().join(" ");
    return reversed;
}

newArray = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];
//number 10 complete
function longestWord(array) {
    let wordCount = 0;
    let longestWord;
    for (var i = 0; i < array.length; i++) {
        if (wordCount < array[i].length) {
            wordCount = array[i].length;
            longestWord = array[i]
        }
    }
    return longestWord;
}

//Number 11 complete
function digitSum(num) {
    var total = 0;
    for (let i = 0; i < num.toString().length; i++) {
        total += parseInt(num.toString().charAt(i));
    }
    return total;
}


//Number 12 complete
function insertDash(num) {
    let twoOdd = [];
    let newNum = num;
    let index = 0
    for (let i = 0; i < num.toString().length; i++) {
        if (parseInt(num.toString().charAt(i)) % 2 !== 0) {
            twoOdd[index] = num.toString().charAt(i);
            index++;
        }
    }
    for (let j = 0; j < 2; j++) {
        newNum = newNum.toString().replace(twoOdd[j], twoOdd[j] + "-");
    }
    return newNum;
}