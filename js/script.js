console.log("script.js loaded");

// api endpoint for fetching gifs from Giphy
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=hbq28BbFCa1daKbbVzfq1ds0FL9dxAWn&q=ironman&limit=50&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

// array for the gifs
let images = [];

// gif container and button from the html
const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");

// function that fetches and displays the gifs from giphy
async function getGif() {
    // fetch data from giphy
    const response = await fetch(endpoint);
    const data = await response.json();

    // clear previous gifs
    images = [];
    gifContainer.innerHTML = "";

    // loop through the gifs and store their original image URLs in the images array
    data.data.forEach(function(gif) {
        images.push(gif.images.original.url);
    });

    // preview the images url's in the console
    console.log(images);

    // display the gifs on the page
    images.forEach(function(imageUrl) {
        gifContainer.innerHTML += `<img src="${imageUrl}" class="col-3 mb-3">`;
    });
}

// fetch gifs when the button is clicked
button.addEventListener("click", function () { 
  getGif();
});