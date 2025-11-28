const films = 
    {
      title: "Killing of Flower Moon",
      director: "Martin Scorsese",
      times: ["15:35"],
      certificate: "15",
      duration: 112,
    };

    console.log(films, "<------film---->");
    // The goal is to render a single film card in the browser's user interface

    // Goal: Refactor the code implementation above to use a film card template

    const filmCard = document.getElementById("film-card-template").content.cloneNode(true);

    console.log(filmCard);

    filmCard.querySelector("h3").textContent = films.title;

    document.body.appendChild(filmCard);
