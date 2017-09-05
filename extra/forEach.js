const array = [1, 2, 3, 4, 5];
//old way
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//new way
//fake variable for each index in this case. Similar to i in the above for loop
array.forEach(function(number) {
    console.log(number);
});

//can also create function first then call with array
const logTheNumber = function(number) {
    console.log(number);
}
array.forEach(logTheNumber);

//newest syntax
array.forEach((number) => {
    console.log(number);
});