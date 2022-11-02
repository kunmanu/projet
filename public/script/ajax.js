const API_KEY= "be9480de1d60eae1fa03ff863915a3ff"

let movieCard
let moviePoster
let movieTitle



const getData = async(queryString) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${queryString}&page=1&include_adult=false`)
    const result = await response.json()

    // console.log(result)
    return result
}


function movieCardBuild(result){
    for ( let i = 0; i < result.results.length ; i++){
        let posterSource = result.results[i].poster_path
        let titleSource = result.results[i].title

        

        movieCard.innerHTML += `<h4 class='movieTitle'>${titleSource}</h4>`
        posterSource != null ? movieCard.innerHTML += `<img src="https://image.tmdb.org/t/p/w185/${posterSource}" class="moviePoster">` : movieCard.innerHTML += "<p>Pas d'image</p>"
    }
}



document.querySelector('.submitBtn').addEventListener("click", async (e)=>{
    e.preventDefault()
    movieCard = document.querySelector('.movieCard')
    moviePoster = document.querySelectorAll('.moviePoster')
    movieTitle = document.querySelectorAll('.movieTitle')
    let form = document.querySelector('.movieSearchForm')
    movieCard.innerHTML= null
    let queryString = form.elements['searchInput'].value

    const result = await getData(queryString)
    // console.log(result.results)
    result.results.length !== 0 ? movieCardBuild(result) : movieCard.innerHTML = "Aucun résultat"
})


