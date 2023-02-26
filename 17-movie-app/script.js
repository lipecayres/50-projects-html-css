    // URL's to use API

const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8e837886524772327b33dd2f1553c14d&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'http://api.themoviedb.org/3/search/movie?api_key=8e837886524772327b33dd2f1553c14d&querry"'

    // HTML link's

    const form = document.getElementById('form')
    const search = document.getElementById('search')
    
        // Search event
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        const searchTerm = search.value 
    
        if(searchTerm && searchTerm !== ''){
            getMovies()
        }
    })
    
    // Get Initial Movies
    getMovies(API_URL)
    
    async function getMovies(url) {
        const res = await fetch(url)
        const data = await res.json()
    
        console.log(data.results)
    }