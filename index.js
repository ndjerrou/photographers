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

const main = () => {
  const uniqueTags = getUniqueTags();
  const ul = document.querySelector("#tags");
  console.log(ul);

  dispTags(uniqueTags, ul);
};

main();
