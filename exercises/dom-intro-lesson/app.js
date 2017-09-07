const quotes = [{
    quote: "At any rate, that is happiness; to be dissolved into something completely and great.",
    author: "Willa Cather",
    image: "http://www.brainpickings.org/wp-content/uploads/2014/06/willacather.jpg"
}, {
    quote: "In our village, folks say God crumbles up the old moon into stars.",
    author: "Alexander Solzhenitsyn",
    image: "http://media.economist.com/images/20080809/3208OB1.jpg"
}, {
    quote: "She wasn’t doing a thing that I could see, except standing there leaning on the balcony railing, holding the universe together.",
    author: "J. D. Salinger",
    image: "https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/11/28/1385673448859/JD-Salinger-portrait-New--010.jpg"
}, {
    quote: "I took a deep breath and listened to the old brag of my heart; I am, I am, I am.",
    author: "Sylvia Plath",
    image: "https://vsramblings.files.wordpress.com/2013/05/sylvia-plath-1.jpg"
}, {
    quote: "Isn’t it pretty to think so?",
    author: "Ernest Hemingway",
    image: "http://arbiteronline.com/files/2013/09/Hemingway-2.jpg"
}, {
    quote: "Beauty is an enormous, unmerited gift given randomly, stupidly.",
    author: "Khaled Hosseini",
    image: "http://payload181.cargocollective.com/1/1/45850/5922559/khaled_Time68846-1_2048.jpg"
}];


const ul = document.createElement("ul");

quotes.forEach((quote) => {
    let li = document.createElement("li");
    li.innerText = `${quote.quote} - ${quote.author}`;
    ul.appendChild(li);
});
/* for (let i = 0; i < quotes.length; i++) {
    let li = document.createElement("li");
    li.innerText = `${quotes[i].quote} - ${quotes[i].author}`;
    ul.appendChild(li);
    console.log(li);
}; */
document.body.appendChild(ul);

/* const quoteDom = document.createElement("h3");
const randomNum = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomNum];
quoteDom.innerHTML = `<p>${randomQuote.quote}<br>   - ${randomQuote.author}</p>`;
quoteDom.style.fontSize = "36px";
document.body.appendChild(quoteDom); */