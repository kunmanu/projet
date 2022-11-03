const API_KEY= "be9480de1d60eae1fa03ff863915a3ff"
const API_IMG= "https://image.tmdb.org/t/p/w185"

// const movieCard = document.querySelector('.movieCard')
const cardContainer = document.querySelector('.cardContainer')



const getData = async(queryString) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${queryString}&page=1&include_adult=false`)
    const result = await response.json()
    return result
}


Object.prototype.setAttr = function (nom, valeur) {
    this.setAttribute(nom, valeur)
    return this
}

Object.prototype.appendC = function (child) {
    this.appendChild(child)
    return this
}




function movieCardBuild(data){

    data.results.forEach(movie => {
        let poster_path = movie.poster_path
        let titleSource = movie.title
        let posterSource = API_IMG+poster_path
        let card = document.createElement('div')
        let title = document.createElement('h4')
        let poster = document.createElement('img')
        
        card.appendC(title)
            .appendC(poster)


        cardContainer.appendC(card)
        
        
        card.setAttribute('class','cardContainer-movieCard movieCard')
        title.setAttribute('class','cardContainer-movieCard-movieTitle' )
        title.innerHTML= titleSource

        poster.setAttr('class', 'cardContainer-movieCard-moviePoster')
              .setAttr('src', posterSource)

    });
}


document.querySelector('.submitBtn').addEventListener("click", async (e)=>{
    e.preventDefault()
    console.log(e);
    let form = document.querySelector('.movieSearchForm')
    let queryString = form.elements['searchInput'].value
    const data = await getData(queryString)
    cardContainer.innerHTML= null
    data.results.length !== 0 ? movieCardBuild(data) : cardContainer.innerHTML = "Aucun résultat"
})


