let title = document.querySelector('#title');
let image_url = document.querySelector('#image_url');
let synopsis = document.querySelector('#synopsis');
let episodes = document.querySelector('#episodes');
let form = document.querySelector('form');
let animename = document.querySelector('#animename');

async function fetchAnimeData(animename) {
  let response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${animename}`);
  //let response = await fetch(`https://api.jikan.moe/v3/anime/${animename}`);
  let data = await response.json();
  console.log(data);
  
  console.log(data.animename);
 
  title.textContent = data.results[0].title;
  image_url.src = data.results[0].image_url;
  synopsis.textContent = data.results[0].synopsis;
  episodes.textContent = data.results[0].episodes;
  
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(animename.value);
  fetchAnimeData(animename.value);
});

//fetchAnimeData(animename.value);

