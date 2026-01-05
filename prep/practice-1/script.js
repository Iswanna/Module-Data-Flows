// State declaraction
const state = {
  films: [],
  searchTerm: "",
};


// Helper function to create a DOM card from film data
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

// API endpoint
const endpoint = "https://programming.codeyourfuture.io/dummy-apis/films.json";

// Fetch function with caching
const fetchFilms = async () => {
  // Check if data exists in localStorage
  const cachedData = localStorage.getItem('films');
  
  if (cachedData) {
    console.log('Using cached data');
    return JSON.parse(cachedData);
  }
  
  // If not cached, fetch from API
  console.log('Fetching from API');
  const response = await fetch(endpoint);
  const data = await response.json();
  
  // Store in localStorage
  localStorage.setItem('films', JSON.stringify(data));
  
  return data;
}

// Initialize app: fetch films data and render
fetchFilms().then((films) => {
  // Assign the fetched data to state.films
  state.films = films;
  render();
})

// Render function: filters and displays film cards based on current state
function render() {
  const container = document.getElementById("films-container");

  // Clear existing cards before appending new ones
  container.innerHTML = "";

  // Filter films based on searchTerm (derived from state)
  const filteredFilms = state.films.filter((film) => {
    return film.title.toLowerCase().includes(state.searchTerm.toLowerCase());
  });

  // Create film cards from filtered results
  const filmCards = filteredFilms.map(createFilmCard);

  // Append the array of filmcards to the page so it becomes visible using the spread operator
  container.append(...filmCards);
}



// Add event listener to search input
const searchInput = document.getElementById("film-search");

searchInput.addEventListener("input", handleSearchInput);

function handleSearchInput(event) {
  // update state with the new search term
  state.searchTerm = event.target.value;

  // Re-render to show filtered results
  render();
}
