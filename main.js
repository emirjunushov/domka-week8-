let container = document.querySelector(".container");
const API = " https://www.omdbapi.com/?apikey=b6003d8a&s=All";
console.log(API);

fetch(API)
  .then((res) => res.json())

  .then((data) => {
    console.log(data.Search);
    data.Search.forEach((item) => {
      console.log(item);
      container.innerHTML += `<div class='main-block'>
      <img class="img" src=${item.Poster} alt="lala">
      <a href="">  <h3>${item.Title}</h3></a> 
      <a href=""><p>Year:${item.Year}</p></a> 
      </div>`;
    });
  });
