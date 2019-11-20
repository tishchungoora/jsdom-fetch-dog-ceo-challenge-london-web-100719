// on page load
document.addEventListener("DOMContentLoaded", function() {
    fetchImageData();
    fetchBreedData();
})

// CHALLENGE 1

// fetch json for images and render images
function fetchImageData() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response) {
            return response.json();
        })
        .then(function(imgJson) {
            renderImages(imgJson);
        })
}

// render images
function renderImages(imgJson) {
    const imgSection = document.querySelector("#dog-image-container");

    imgJson.message.forEach(function(link) {
        let imgTag = document.createElement("img");
        imgTag.src = link;
        imgSection.appendChild(imgTag);
    })
}

// CHALLENGE 2

// fetch json for breeds and render breeds
function fetchBreedData() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response) {
            return response.json();
        })
        .then(function(breedJson) {
            renderBreedsList(breedJson);
        })
}

// render breeds
function renderBreedsList(breedJson) {
    const breedsList = document.querySelector("#dog-breeds");

    for (const key in breedJson.message) {
        let dogLiEl = document.createElement("li");
        dogLiEl.innerText = key;
        breedsList.appendChild(dogLiEl);
        dogLiEl.style.cursor = "pointer";
        dogLiEl.addEventListener("click", changeColor); 
    }
}

// CHALLENGE 3

// using event.target to implement event delegation
function changeColor(event) {
  event.target.style.color = '#d00';
}