let author = document.querySelector("div#author h3");
let quote = document.querySelector("div#quote h1");
let btn = document.getElementById('btn');

const url = 'https://api.quotable.io/random';

let generateQuote = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            author.innerText = item.author,
            quote.innerText = item.content
        });
};

window.addEventListener("load", generateQuote)
btn.addEventListener("click", generateQuote);