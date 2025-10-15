const form = document.getElementById("search-form")
const searchTerm = document.getElementById("search-term")
form.addEventListener("submit", function (e){
e.preventDefault();

console.log("Form submitted")
search()

})

function search(){
 fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f6f4671c&s=${searchTerm.value}`)
 .then(res => res.json())
 .then(data => {
    // OMDB returns a "Response" field as the string "True" or "False"
    if (data.Response === "False") {
        console.log("no movies found")
        return;
    }
    // when successful, pass the data to getNames
    getNames(data)
 })
 .catch(err => console.error('Fetch error:', err))

}

function getNames(SearchArray) {
    console.log(SearchArray)
    let movieList = [];
 console.log(SearchArray.Search)
    for (let movie of SearchArray.Search) {
        console.log(movie.Title)
        movieList.push(movie.Title)
    }
    console.log("the list of movies found:" + movieList)
    getMovies(movieList)
}

function getMovies(list){
    console.log(list.length)
    for (let movie of list){
        console.log(movie)

        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f6f4671c&t=${movie}`)
        .then(res => res.json())
        .then(data => console.log(data)
    )
    }


}