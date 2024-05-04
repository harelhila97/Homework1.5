function init() {
    const Searchbutton = document.querySelector("#Searchbutton")
    Searchbutton.addEventListener("click", async () => {
        try {
            const SearchKey = document.querySelector("#searchKey")
            const searchURL = "https://www.omdbapi.com/?apikey=720ec72f&s=" + SearchKey.value.toLowerCase();
            const result = await fetch(searchURL)
            const data = await result.json()
            const newMoviearr = data.Search
            draw(newMoviearr);
            console.log(data.Search[0]);
        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    })
}

function clearData() {
    document.querySelector("#movieDraw").innerHTML = "";

}

function draw(Movies) {
    clearData();
    const movieDraw = document.querySelector("#movieDraw")
    const DrawData = Movies.map(movie => getsinglemovie(movie))
    movieDraw.append(...DrawData)
}

function getsinglemovie(movie) {
    if (typeof movie !== 'object') return;

    const singleMovieDiv = document.createElement("div")
    singleMovieDiv.id = "singleMovieDiv"
    const Title = document.createElement("h3")
    const Year = document.createElement("h5")
    const imdbID = document.createElement("h5")
    const Type = document.createElement("h5")
    const Poster = document.createElement("img")

    Title.innerText = movie.Title
    Year.innerText = "Year: " + movie.Year
    imdbID.innerText = "imdbID: " + movie.imdbID
    Type.innerText = "Type: " + movie.Type
    Poster.src = movie.Poster

    singleMovieDiv.append(Title, Year, imdbID, Type, Poster)
    return singleMovieDiv
}

init();

