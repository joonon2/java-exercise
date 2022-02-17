const pickQuote = document.querySelector("#pickQuote")
const quote = document.querySelector("#pickQuote span:first-child")
const author = document.querySelector("#pickQuote span:last-child")

const quotes = [
    {
        quote: "こんにちは",
        author: "Yeonsu",
    },

    {
        quote: "Hi",
        author: "minju",
    },

    {
        quote: "你好",
        author: "heesoo",
    }
]

const printQuote = quotes[parseInt(Math.random() * quotes.length)]

quote.innerText = printQuote.quote
author.innerText = printQuote.author
