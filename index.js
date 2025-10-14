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
 .then(data => console.log(data))
}