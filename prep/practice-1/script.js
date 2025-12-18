const films = [
  {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  },
  {
    title: "Dune",
    director: "Denis Villeneuve",
    times: ["12:00", "18:45"],
    certificate: "12A",
    duration: 155,
  },
  {
    title: "Everything Everywhere All at Once",
    director: "Daniel Kwan & Daniel Scheinert",
    times: ["14:20", "20:30"],
    certificate: "12A",
    duration: 139,
  },
  {
    title: "Top Gun: Maverick",
    director: "Joseph Kosinski",
    times: ["11:00", "16:15", "21:00"],
    certificate: "12",
    duration: 131,
  },
  {
    title: "The Fabelmans",
    director: "Steven Spielberg",
    times: ["13:00", "19:10"],
    certificate: "12",
    duration: 151,
  },
];

const createFilmCard = ({ title, director, duration, certificate }) => {
  // Get a <template> element from the DOM (#film-card)
  const template = document.getElementById("film-card");
  // Clone its contents (template.content.cloneNode(true))
  const card = template.content.cloneNode(true);
  // Now, we are going to query our cloned fragment, not the entire page.
  // Fill in text values using data from a film object
  card.querySelector("h3").textContent = title;
  card.querySelector("[data-director]").textContent = `Director: ${director}`;
  card.querySelector("time").textContent = `${duration} minutes`;
  card.querySelector("[data-certificate").textContent =
    `Certificate: ${certificate}`;

  return card;
};
// define a variable and initialize it with an empty array
const filmCards = [];

// loop through the array of objects
for (const film of films) {
  // for each film, use the createFilmCard function to create a filmcard for the film
  // push the filmcard created into the filmCards array.
  filmCards.push(createFilmCard(film));
}

// Append the array of filmcards to the page so it becomes visible using the spread operator
document.body.append(...filmCards);
