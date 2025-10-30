console.log("loaded")
let moviesFromStorage = JSON.parse(localStorage.getItem("myMovieList"))

console.log(moviesFromStorage)

if(moviesFromStorage.length > 0){
    getMovies(moviesFromStorage)
}


async function getMovies(list) {
    console.log(list.length);
    
    const promises = [];
    
    // Loop through each movie and collect the promises
    for (let movie of list) {
        const promise = fetch(`https://www.omdbapi.com/?&apikey=f6f4671c&i=${movie}`)
            .then(res => res.json())
            .catch(err => null);
        promises.push(promise);
    }
    
    // Wait for all promises to complete
    const detailedList = await Promise.all(promises);
    
    // Filter out failed responses
    const validMovies = detailedList.filter(movie => movie.Response == "True" && movie.Actors !== "N/A");
    
    if (validMovies.length > 0){
    populateList(validMovies);
    } else {
        document.getElementById("empty").innerHTML = "Unable to find what you're looking for. Please try another search."
    }
}



function populateList(list){
    // clear the list if its already there
    document.getElementById("movie-list").innerHTML = ""
    console.log("called")
    console.log(list)
    console.log(list.length)
    document.getElementById("empty").style.display = "none"
    document.getElementById("movie-list").style.display = "block"

    for (let i = 0; i < list.length-1; i++){
      /*   Loop through the provided list and populate the movies 
      with adding a horizontal ruler under them (except the last one) */

        document.getElementById("movie-list").innerHTML += 
        `    <div class="movie">
        <div class="movie-poster"><img src="${list[i].Poster}" class="poster"></div>
        <div class="movie-details">
            <div class="flex info1">
            <div class="movie-title">${list[i].Title}</div>
            <div class="rating"><img src="images/star.svg" class="star">${list[i].Ratings[0].Value}</div>
            </div>

            <div class="movie-info flex">
                <div class="duration"><p>${list[i].Runtime}</p></div>
                <div class="genre"><p>${list[i].Genre}</p></div>
                     <div class="add" onclick="removeFromList('${list[i].imdbID}')"><img src="images/remove.svg" class=""> Remove</div></div>
            <div class="movie-plot">${list[i].Plot}</div>
        </div>
    </div>
    <hr>
    `
    }
            /* Populating the last item of the list */
            document.getElementById("movie-list").innerHTML += 
        `    <div class="movie">
        <div class="movie-poster"><img src="${list[list.length-1].Poster}" class="poster"></div>
        <div class="movie-details">
            <div class="flex info1">
            <div class="movie-title">${list[list.length-1].Title}</div>
            <div class="rating"><img src="images/star.svg" class="star">${list[list.length-1].Ratings[0].Value.slice(0, -3)}</div>
            </div>

            <div class="movie-info flex">
                <div class="duration"><p>${list[list.length-1].Runtime}</p></div>
                <div class="genre"><p>${list[list.length-1].Genre}</p></div>
                     <div class="add" onclick="removeFromList('${list[list.length-1].imdbID}')"><img src="images/Remove.svg" class=""> Remove</div></div>
            <div class="movie-plot">${list[list.length-1].Plot}</div>
        </div>
    </div>
    `

}

function removeFromList(movieID){
    //console.log(movieID)
    let newList = moviesFromStorage.filter((movie) => movie !== movieID)
    //console.log(newList)
    localStorage.setItem("myMovieList",JSON.stringify(newList))
     window.location.reload();



}