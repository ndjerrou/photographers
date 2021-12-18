import data from "./data.json";
// destructuring

// 1 - creation of a variable named photographers ; 2 - photographers = value of the prop photographers inside my data object
const { photographers } = data;

//scope global

const getUniqueTags = () => {
  const tags = [];
  // scope enfant
  photographers.forEach((photographer) =>
    photographer.tags.forEach((tag) => {
      if (!tags.includes(tag)) tags.push(tag);
    })
  );
  return tags;
};

const dispTags = (tags, node) => {
  let template = "";

  tags.forEach((tag) => (template += `<li>#${tag}</li>`));

  node.innerHTML = template;
};

const dispPhotographers = (photographers, node) => {
  // TODO : write the fn
  let template = "";

  photographers.forEach(
    ({ city, country, name, price, portrait, tagline, tags }) => {
      let formattedTags = tags.map(
        (tag) => `<span class="tagDisplayP">#${tag}</span>`
      );

      //array --> String
      let formattedTagsString = formattedTags.join(" ");

      //string --> array : split

      console.log(formattedTags);
      template += ` 
        <article>
          <h2>${name}</h2>
          <p>${city}, ${country}</p>
          <p>${tagline}</p>
          <p>${price}€/jour</p>
          <p id="tagsDisplayp">${formattedTagsString}</p>
        </article>
      `;
    }
  );

  node.innerHTML = template;
};

const main = () => {
  const uniqueTags = getUniqueTags();
  const ul = document.querySelector("#tags");
  const section = document.querySelector("#photographers");

  dispTags(uniqueTags, ul);
  dispPhotographers(photographers, section);
};

main();
