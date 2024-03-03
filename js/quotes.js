const quotes = [
    {
        quote : "Every moment is a fresh beginnig.",
        author : "T.S Eliot",
    },
    {
        quote : "Everything you can imagine is real.",
        author : "Pablo Picasso",
    },
    {
        quote : "What we think, we become.",
        author : "Buddha",
    },
    {
        quote : "Try to be a rainbow in someone's cloud.",
        author : "Maya Angelou",
    },
    {
        quote : "And still, I rise.",
        author : "Maya Angelou",
    },
    {
        quote : "The time is always right to do what is right.",
        author : "MartinLuther King Jr",
    },
    {
        quote : "For success, attitude is equally as important as ability",
        author : "Harrt F, Banks",
    },
    {
        quote : "Don't wish it were easier. Wish you were better.",
        author : "Jim Rohn",
    },
    {
        quote : "I don't need it to be easy, I need it to be worth it.",
        author : "Lil Wayne",
    },
    {
        quote : "Yesterday you said tomorrow. Just do it",
        author : "Nike",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//화면출력
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;