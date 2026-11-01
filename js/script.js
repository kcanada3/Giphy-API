console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=&q=where%27s+your+proof&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

let images = [];

let data = fetch("https://api.giphy.com/v1/gifs/search?api_key=&q=where%27s+your+proof&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips");
console.log(data);

async function getGif() {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=&q=where%27s+your+proof&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
    const data = await response.json();
    const fact = data.facts[0];

    // update the dom with gif
    const output = document.getElementById("gifOutput");
    output.textContent = fact;
}

getGif()