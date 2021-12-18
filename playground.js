// each value in JS can be either FALSY or TRUTHY

// const user = {
//   name: "Martial",
//   login: "mleprevost",
//   password: "guerre",
//   age: 40
// };

// console.log(user);
// console.log(typeof user);

// // envoi vers serveur avec le format json

// // objet --> string
// const userJSON = JSON.stringify(user);

// localStorage.setItem("user", userJSON);

// // getting back my user

// const Martial = localStorage.getItem("user");
// console.log(Martial.name); // xx

// // string --> objet
// const martialJSON = JSON.parse(Martial);
// console.log(martialJSON.name);

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

const main = () => {
  createUniqueTags();
  displayTags(uniqueTags);
};

main();
