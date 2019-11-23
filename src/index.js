document.addEventListener("DOMContentLoaded", function() {

    // declare variables
    const imgSection = document.querySelector("#dog-image-container");
    const breedsList = document.querySelector("#dog-breeds");
    
    // execute fetch and renders
    fetchImageData();
    fetchBreedData();

    // execute list filtering
    filterList();

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
        for (const key in breedJson.message) {
            let dogLiEl = document.createElement("li");
            dogLiEl.innerText = key;
            breedsList.appendChild(dogLiEl);

            dogLiEl.style.cursor = "pointer";
            dogLiEl.addEventListener("click", changeColor);

            dogLiEl.setAttribute("class", `${key.charAt(0)}`);
        }
    }
    
    // CHALLENGE 3

    // using event.target to implement event delegation
    function changeColor(event) {
      event.target.style.color = '#d00';
    }

    // CHALLENGE 4
    
    function filterList() {
        const dropDown = document.querySelector("#breed-dropdown");

        dropDown.addEventListener("change", function() {
            liArr = document.querySelectorAll("li");
            ddValue = dropDown.value;

            liArr.forEach(function(li) {
                li.style.display = "";

                if (li.className !== ddValue && ddValue !== "All") {
                    li.style.display = "none";
                }
            })
        })
    }

})
