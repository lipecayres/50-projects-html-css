    // URL's to use API

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8e837886524772327b33dd2f1553c14d&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=8e837886524772327b33dd2f1553c14d&query="'

    // HTML link's

    const main = document.getElementById('main')
    const form = document.getElementById('form')
    const search = document.getElementById('search')
    
        // Search event
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        const searchTerm = search.value 
            
            // Checking empty input
        if(searchTerm && searchTerm !== ''){
            getMovies(SEARCH_API + searchTerm)

            search.value = ''
        } else {
            window.location.reload()
        }
    })
    
    // Get Initial Movies
    getMovies(API_URL)
    
    async function getMovies(url) {
        const res = await fetch(url)
        const data = await res.json()
    
        showMovies(data.results)
    }

        // Display movies at screen
    function showMovies(movies) {
        main.innerHTML = ''

        movies.forEach((movie) => {
            const { title,poster_path, vote_average, overview } = movie

            const movieEl = document.createElement('div')

            movieEl.classList.add('movie')

            movieEl.innerHTML = `
            <!-- Movie Banners-->
            <div class="movie">
                <img src="${IMG_PATH + poster_path}" alt="${title}">
    
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${}">${vote_average}</span>
                </div>
    
                <div class="overview">
                    <h3>Overview</h3>
                    <p> "${overview}"</p>
                </div>
            </div>
            `

        })
            // Getting class using rate
            
        function getClassByRate(vote) {
            if (vote > 8) {
                return 'green'
            } else if (vote >= 5) {
                return 'orange'
            } else {
                return 'red'
            }
        }


    }