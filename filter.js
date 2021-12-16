const products = [
  { product: "trotinette électrique", price: 300 },
  { product: "pc asus", price: 600 },
  { product: "aspirateur dyson", price: 400 },
  { product: "mac", price: 3000 }
];

// les produits vendus dont la valeur > 600€

const filteredProducts = products.filter(({ price }) => price > 390);
console.log(filteredProducts);
