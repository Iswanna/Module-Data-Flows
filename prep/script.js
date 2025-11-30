const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Typist Artist Pirate King",
    director: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    duration: 108,
  },
];
console.log(films, "<------film---->");

// The goal is to render a single film card in the browser's user interface

// Goal: Refactor the code implementation above to use a film card template
// Note: the filmcard component is the function below which is used to create the filmcard in the UI
function createFilmCard(film) {
  const filmCard = document
    .getElementById("film-card-template")
    .content.cloneNode(true);

  filmCard.querySelector("h3").textContent = film.title;
  filmCard.querySelector("p").textContent = film.director;
  filmCard.querySelector("time").textContent = film.times;
  filmCard.querySelector("data").textContent = film.certificate;

  return filmCard;
}

for (const film of films) {
  const card = createFilmCard(film);
  document.body.appendChild(createFilmCard(film));
}
