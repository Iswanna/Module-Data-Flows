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

    // In order to be able to see or render the film on the browser's user interface when the page loads,
    // we need to do the following
   // create a section element
   // create an header element
   // append the film.title to the textcontent of the header element
   // append the header element to the section element
   // append the section element to the body of the html documen

    const filmCard = document.createElement("section");
    const title = document.createElement("h1");
    const director = document.createElement("p");

    title.textContent = films.title;
    director.textContent = films.director;

    filmCard.appendChild(title);
    filmCard.appendChild(director);



    document.body.appendChild(filmCard);
