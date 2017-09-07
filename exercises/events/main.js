let number = 0;
const button = document.querySelector("button");
const liTags = document.querySelectorAll("li");

//produce random number for rgb
function randomRgb() {
    return Math.floor(Math.random() * 255);
}

//changes background color
document.body.addEventListener("keydown", function(e) {
    let randomColor = `rgba(${randomRgb()}, ${randomRgb()}, ${randomRgb()}, 1)`;
    document.body.style.backgroundColor = randomColor;
    console.log(e);
});


//copy - don't do that and changes li to red and to black
liTags.forEach((li) => {
    li.addEventListener("copy", function(e) {
        console.log("Don't do that");
        console.log(e);
    })
    li.addEventListener("click", function() {
        if (li.style.color === "red") {
            li.style.color = "black";
        } else {
            li.style.color = "red";
        }
    });
});

//adds one when clicking button
function addOne(e) {
    number++;
    document.querySelector(".number").innerText = number;
    console.log(e);
};
button.addEventListener("click", addOne);