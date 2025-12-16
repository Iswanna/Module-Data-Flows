const film = {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  };



const createFilmCard = (film) => {
// Get a <template> element from the DOM (#film-card)
const template = document.getElementById("film-card")
// Clone its contents (template.content.cloneNode(true))
const card = template.content.cloneNode(true);
// Now, we are going to query our cloned fragment, not the entire page.
// Fill in text values using data from a film object
card.querySelector("h3").textContent = film.title;
card.querySelector("[data-director]").textContent = `Director: ${film.director}`;
card.querySelector("time").textContent = `${film.duration} minutes`;
card.querySelector("[data-certificate").textContent = `Certificate: ${film.certificate}`;

return card
}

// call the createFilmCard function
const filmCard = createFilmCard(film)
// Append the cloned content to the page so it becomes visible
document.body.append(filmCard);


