const form = document.getElementById("search-form")
const searchTerm = document.getElementById("search-term")
const dummyMovies= [{
    "Title": "Men in Black II",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "03 Jul 2002",
    "Runtime": "88 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Barry Sonnenfeld",
    "Writer": "Lowell Cunningham, Robert Gordon, Barry Fanaro",
    "Actors": "Tommy Lee Jones, Will Smith, Rip Torn",
    "Plot": "Agent J is sent to find Agent K and restore his memory after the re-appearance of a case from K's past.",
    "Language": "English",
    "Country": "United States",
    "Awards": "4 wins & 16 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNDA0NT
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "38%"
        },
        {
            "Source": "Metacritic",
            "Value": "49/100"
        }
    ],
    "Metascore": "49",
    "imdbRating": "6.2",
    "imdbVotes": "421,618",
    "imdbID": "tt0120912",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$193,735,288",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Men Suddenly in Black 2",
    "Year": "2006",
    "Rated": "N/A",
    "Released": "14 Sep 2006",
    "Runtime": "90 min",
    "Genre": "Comedy, Drama",
    "Director": "Shu-Kai Chung",
    "Writer": "Oi-Wah Lam, Heiward Mak, Teresa Sun-Kwan Mo",
    "Actors": "Eric Tsang, Teresa Sun-Kwan Mo, Jordan Chan",
    "Plot": "The war between men and women never ends... Last time, Tin, Dr. Lee and Chao failed in the \"mission\", but they didn't take this as a lesson. They are more cautions these years and success to fool around behind their wives. This ti...",
    "Language": "Cantonese",
    "Country": "Hong Kong",
    "Awards": "2 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjEzOTAzMjE3M15BMl5BanBnXkFtZTcwMjI1MjY0MQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.2",
    "imdbVotes": "231",
    "imdbID": "tt0860387",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Who Saw the Men in Black",
    "Year": "2021",
    "Rated": "N/A",
    "Released": "09 Nov 2021",
    "Runtime": "74 min",
    "Genre": "Documentary",
    "Director": "Blake Cousins, Brent Cousins, Darcy Weir",
    "Writer": "Darcy Weir, Geoffrey D. Calhoun",
    "Actors": "Dan Aykroyd, Art Bell, John F. Burroughs",
    "Plot": "Who are the Men in Black? Many have reported their own Men in Black experiences and eye witness accounts since the beginning of the UFO cover-up history. Walk through the true history of Men in Black events from the 1940s until now.",
    "Language": "English",
    "Country": "United States",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzRhYmYyY2ItMjM2NS00YmRiLWE5NTctMTYxNzEzNzhkMDIyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.9/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.9",
    "imdbVotes": "114",
    "imdbID": "tt16051820",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Men in Black: International",
    "Year": "2019",
    "Rated": "PG-13",
    "Released": "14 Jun 2019",
    "Runtime": "114 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "F. Gary Gray",
    "Writer": "Matt Holloway, Art Marcum, Lowell Cunningham",
    "Actors": "Chris Hemsworth, Tessa Thompson, Kumail Nanjiani",
    "Plot": "The MIB tackle a mole in their organization.",
    "Language": "English, French, Chinese",
    "Country": "United States, China, United Kingdom",
    "Awards": "1 win & 9 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI0ZjJlODYtNTAyOS00ZDk4LTk0M2ItNDljMzY5NmZkYTRkXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "23%"
        },
        {
            "Source": "Metacritic",
            "Value": "38/100"
        }
    ],
    "Metascore": "38",
    "imdbRating": "5.6",
    "imdbVotes": "156,453",
    "imdbID": "tt2283336",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$80,001,807",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Men in Black II",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "03 Jul 2002",
    "Runtime": "88 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "Barry Sonnenfeld",
    "Writer": "Lowell Cunningham, Robert Gordon, Barry Fanaro",
    "Actors": "Tommy Lee Jones, Will Smith, Rip Torn",
    "Plot": "Agent J is sent to find Agent K and restore his memory after the re-appearance of a case from K's past.",
    "Language": "English",
    "Country": "United States",
    "Awards": "4 wins & 16 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "38%"
        },
        {
            "Source": "Metacritic",
            "Value": "49/100"
        }
    ],
    "Metascore": "49",
    "imdbRating": "6.2",
    "imdbVotes": "421,618",
    "imdbID": "tt0120912",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$193,735,288",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Men Suddenly in Black 2",
    "Year": "2006",
    "Rated": "N/A",
    "Released": "14 Sep 2006",
    "Runtime": "90 min",
    "Genre": "Comedy, Drama",
    "Director": "Shu-Kai Chung",
    "Writer": "Oi-Wah Lam, Heiward Mak, Teresa Sun-Kwan Mo",
    "Actors": "Eric Tsang, Teresa Sun-Kwan Mo, Jordan Chan",
    "Plot": "The war between men and women never ends... Last time, Tin, Dr. Lee and Chao failed in the \"mission\", but they didn't take this as a lesson. They are more cautions these years and success to fool around behind their wives. This ti...",
    "Language": "Cantonese",
    "Country": "Hong Kong",
    "Awards": "2 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjEzOTAzMjE3M15BMl5BanBnXkFtZTcwMjI1MjY0MQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.2/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "5.2",
    "imdbVotes": "231",
    "imdbID": "tt0860387",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Who Saw the Men in Black",
    "Year": "2021",
    "Rated": "N/A",
    "Released": "09 Nov 2021",
    "Runtime": "74 min",
    "Genre": "Documentary",
    "Director": "Blake Cousins, Brent Cousins, Darcy Weir",
    "Writer": "Darcy Weir, Geoffrey D. Calhoun",
    "Actors": "Dan Aykroyd, Art Bell, John F. Burroughs",
    "Plot": "Who are the Men in Black? Many have reported their own Men in Black experiences and eye witness accounts since the beginning of the UFO cover-up history. Walk through the true history of Men in Black events from the 1940s until now.",
    "Language": "English",
    "Country": "United States",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzRhYmYyY2ItMjM2NS00YmRiLWE5NTctMTYxNzEzNzhkMDIyXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "4.9/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "4.9",
    "imdbVotes": "114",
    "imdbID": "tt16051820",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
},{
    "Title": "Men in Black: International",
    "Year": "2019",
    "Rated": "PG-13",
    "Released": "14 Jun 2019",
    "Runtime": "114 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "F. Gary Gray",
    "Writer": "Matt Holloway, Art Marcum, Lowell Cunningham",
    "Actors": "Chris Hemsworth, Tessa Thompson, Kumail Nanjiani",
    "Plot": "The MIB tackle a mole in their organization.",
    "Language": "English, French, Chinese",
    "Country": "United States, China, United Kingdom",
    "Awards": "1 win & 9 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI0ZjJlODYtNTAyOS00ZDk4LTk0M2ItNDljMzY5NmZkYTRkXkEyXkFqcGc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "5.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "23%"
        },
        {
            "Source": "Metacritic",
            "Value": "38/100"
        }
    ],
    "Metascore": "38",
    "imdbRating": "5.6",
    "imdbVotes": "156,453",
    "imdbID": "tt2283336",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$80,001,807",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}]

form.addEventListener("submit", function (e){
e.preventDefault();

console.log("Form submitted")
//populateList(dummyMovies)

search()

})

function search(){
 fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f6f4671c&s=${searchTerm.value}`)
 .then(res => res.json())
 .then(data => {
    // OMDB returns a "Response" field as the string "True" or "False"
    if (data.Response === "False") {
        console.log("no movies found")
        document.getElementById("empty").innerHTML = "Unable to find what you're looking for. Please try another search."
        return;
    }
    // when successful, pass the data to getNames
    getNames(data)
 })
 .catch(err => console.error('Fetch error:', err))

}
    // Get the list of movie titles from the initial search and pass them to get movies for details on each
function getNames(SearchArray) {
    console.log(SearchArray)
    let movieList = [];
 console.log(SearchArray.Search)
    for (let movie of SearchArray.Search) {
        //console.log(movie.Title)
        movieList.push(movie.Title)
    }
    console.log("the list of movies found: " + movieList)
    getMovies(movieList)
}

function getMovies(list){
    let detailedList = []
    console.log(list.length)
    for (let movie of list){
        //console.log(movie)

        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f6f4671c&t=${movie}`)
        .then(res => res.json())
        .then(data => detailedList.push(data))
        .then(detailedList => {
            // filter out failed responses and pass the completed array to populateList
            populateList(detailedList)})
    }

    //populateList(detailedList)

}

function populateList(list){
    console.log("called")
    //console.log(list)
    document.getElementById("empty").style.display = "none"
    document.getElementById("movie-list").style.display = "block"

    for (let i = 0; i < list.length-1; i++){
      /*   Loop through the provided list and populate the movies 
      with adding a horizontal ruler under them (except the last one) */
        console.log(list[i])
        document.getElementById("movie-list").innerHTML += 
        `    <div class="movie">
        <div class="movie-poster"><img src="${list[i].Poster}" class="poster"></div>
        <div class="movie-details">
            <div class="flex info1">
            <div class="movie-title">${list[i].Title}</div>
            <div class="rating"><img src="images/star.svg" class="star">${list[i].Ratings[0].Value.slice(0, -3)}</div>
            </div>

            <div class="movie-info flex">
                <div class="duration"><p>${list[i].Runtime}</p></div>
                <div class="genre"><p>${list[i].Genre}</p></div>
                     <div class="add" onclick="addToWatchList('${list[i].imdbID}')"><img src="images/add.svg" class=""> Watchlist</div></div>
            <div class="movie-plot">${list[i].Plot}</div>
        </div>
    </div>
    <hr>
    `
    }
            /* Populating the last item of the list */
/*             document.getElementById("movie-list").innerHTML += 
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
                     <div class="add" onclick="addToWatchList('${list[list.length-1].imdbID}')"><img src="images/add.svg" class=""> Watchlist</div></div>
            <div class="movie-plot">${list[list.length-1].Plot}</div>
        </div>
    </div>
    ` */

}


function addToWatchList(movieId){
    console.log(movieId)
}