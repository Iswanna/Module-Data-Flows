const film = {
    title: "Killing of Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    duration: 112,
  };

  function createChildElement(parentElement, tagname, textContent) {
    const element = document.createElement(tagname);
    element.textContent = textContent;
    parentElement.append(element);
    return element;
  }

  const card = document.getElementById("film-card").content.cloneNode(true);
  // Now, we are going to query our cloned fragment, not the entire page.
  card.querySelector("h3").textContent = film.title;
  card.querySelector("[data-director]").textContent = `Director: ${film.director}`;
  card.querySelector("time").textContent = `${film.duration} minutes`;
  card.querySelector("[data-certificate").textContent = `Certificate: ${film.certificate}`;

  document.body.append(card);

