const apiKey="api_key=6192e2e10b1eeb12b7be43e25f111522";
const baseURL = "https://api.themoviedb.org/3";
const imgURL = "https://image.tmdb.org/t/p/w500"

const trending = "/discover/movie?sort_by=popularity.desc&";

const trendRequest = baseURL +trending+apiKey;

window.onload = ()=>{
  const trendRequest = baseURL +trending+apiKey;
  fetch(trendRequest)
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    // console.log(data.results.length)  
    for (let x = 0; x < data.results.length; x++) {
        
    }
  })
  
  
}