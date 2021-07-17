const apiKey="api_key=6192e2e10b1eeb12b7be43e25f111522";
const baseURL = "https://api.themoviedb.org/3";
const imgURL = "https://image.tmdb.org/t/p/w500"

const trending = "/discover/movie?sort_by=popularity.desc&";
// const trendingSection = 
const mainUrl = baseURL+apiKey;
const trendRequest = baseURL +trending+apiKey;

getMovies(mainUrl)
  
function getMovies(url) {
  
  fetch(url)
  .then(res =>res.json())
  .then(data =>{
    showMovies(data.results)
  })

}



function showMovies(data) {
  data.forEach(movie => {
    const movieEl = document.createElement("div")
    movieEl.classList.add("movie");
    movieEl.innerHTML `
    <a class="card" style="width: 18rem; text-decoration: none;" href="##">
    <img src="${moviePosters}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="movieRate" style="text-decoration: none;">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path id="star" d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
       <span class="align-middle">
         <span id="movieRate">
          ${movieRates}
         </span>
       </span>
      </p>
      <p class="card-text movieTitle" style="text-decoration: none;">
        <span id="movietitle">
          ${movieTitles}
        </span>
      </p>
      <button class="btn trailer-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play " viewBox="0 0 16 16">
          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
        </svg>
        <span class="align-middle">Trailer</span>
      </button>
    </div>
    </a> `
  });
}