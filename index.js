import data from "./data.json";

const { photographers } = data;

const ul = document.querySelector("#tags");
const uniqueTags = [];
ul.innerHTML = "";

const createUniqueTags = () => {
  photographers.forEach(({ tags }) => {
    tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    });
  });
};

const displayTags = (tags) => {
  tags.forEach((tag) => (ul.innerHTML += `<li>${tag}</li>`));
};

const dispPhotographers = (photographers, node) => {
  let template = "";
  photographers.forEach(({ name, price, city, country, tagline, tags }) => {
    // je cherche la valeur de la prop name dans mon objet photographer
    // et je créé une variable du même nom que la propriété cherchée

    //const { name, price, city, country, tagline, tags } = photographer;

    // join : tableau ==> string

    let tagsArraySpan = tags.map((t) => `<span>${t}</span>`);
    let tagsString = tagsArraySpan.join(" ");

    template += `
    <article>
     <h2>${name}</h2>
     <p>${country}, ${city}</p>
     <p>${tagline}</p>
     <p>${price}€/jour</p>
     <div>${tagsString}</div>
    </article>
    `;
  });
  node.innerHTML = template;
};

const filterPhotographerByTag = (photographers) => {
  let filterededPhotographers = [];
  document
    .querySelector("ul")
    .addEventListener("click", ({ target: { textContent: tag } }) => {
      filterededPhotographers = photographers.filter(({ tags }) =>
        tags.includes(tag)
      );

      if (filterededPhotographers.length) {
        dispPhotographers(
          filterededPhotographers,
          document.querySelector("#photographers")
        );
      }
    });
};

const main = () => {
  createUniqueTags();
  displayTags(uniqueTags);
  dispPhotographers(photographers, document.querySelector("#photographers"));

  filterPhotographerByTag(photographers);
};

main();
