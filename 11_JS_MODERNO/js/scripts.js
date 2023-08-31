// // 1 var, let e const
// var x = 10;
// var y = 15;

// if (y > 10) {
//   var x = 5;
//   console.log(x);
// }
// console.log(x);

// let a = 10;
// let b = 15;

// if (b > 11) {
//   let a = 5;
//   console.log(a);
// }

// console.log(a);

// function logName() {
//   const name = "Lucas";
//   console.log(name);
// }

// const name = "Fernando";

// logName();
// console.log(name);

// // 2 arrow function
// const sum = function (a, b) {
//   return a + b;
// };

// const arrowSum = (a, b) => a + b;

// console.log(sum(1, 3));
// console.log(arrowSum(2, 4));

// const greeting = (name) => {
//   if (name) {
//     return `Oi ${name}`;
//   } else {
//     return "Oi!";
//   }
// };

// console.log(greeting("lucas"));
// console.log(greeting());

// const user = {
//   name: "Lucas",
//   sayUserName() {
//     setTimeout(function () {
//       console.log(this);
//       console.log(`username: ${this.name}`);
//     }, 1000);
//   },
//   sayUserNameArrow() {
//     setTimeout(() => {
//       console.log(this);
//       console.log(`Username: ${this.name}`);
//     }, 1340);
//   },
// };

// // user.sayUserNameArrow();
// // user.sayUserName();

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const numbersPar = arr.filter((n) => {
//   if (n % 2 == 0) {
//     return n;
//   }
// });
// console.log(numbersPar);

// const users = [
//   { name: "Lucas", time: true },
//   { name: "Fernando", time: false },
//   { name: "Geremias", time: false },
//   { name: "Paula", time: true },
//   { name: "Flávia", time: true },
//   { name: "Luis", time: false },
//   { name: "Beto", time: true },
// ];

// const usersLivres = users.filter((livres) => livres.time);
// const usersNaoLivres = users.filter((livres) => livres.time == false);

// console.log(usersLivres);
// console.log(usersNaoLivres);

// 4 map
const products = [
  { nome: "Camisa", price: 23.43, categoria: "Roupa" },
  { nome: "Forno", price: 443.43, categoria: "Eletro" },
  { nome: "Ferro de Passar", price: 63.43, categoria: "Eletro" },
  { nome: "Picanha", price: 13, categoria: "Comida" },
  { nome: "Calça", price: 43.43, categoria: "Roupa" },
  { nome: "Terno", price: 2323.43, categoria: "Roupa" },
];

products.map((product) => {
  if (product.categoria === "Roupa") {
    product.desconto = true;
  } else {
    product.desconto = false;
  }
});

console.log(products);

const descontos = products.filter((desconto) => desconto.desconto);
console.log(descontos);

// 5 template literals
const username = "Lucas";
const age = 21;

console.log(`O nome é ${username} e a idade ${age}`);

// 6 destructuring
const frutas = ["maçã", "uva", "laranja"];
const [f1, f2, f3] = frutas;

console.log(f2, f3, f1);

const produtoDetalhado = {
  name: "mouse",
  price: 13.9,
  category: "Periférico",
  color: "preto",
};

const { name: nomeProduto, price, category, color } = produtoDetalhado;

console.log(
  `O nome do produto é ${nomeProduto}, preço ${price}, categoria ${category} e cor${color}`
);

// 7 spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a3, 7];
console.log(a4);

const carName = { name: "Golf" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 120000, price: 93000 };

const car = { ...carName, ...carBrand, ...otherInfos };
console.log(car);

// 8 classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productDiscount(discont) {
    return this.price * ((100 - discont) / 100);
  }
}

const camisa = new Product("camisa", 30.9);
console.log(camisa);
console.log(camisa.productDiscount(20));
console.log(camisa.productDiscount(30));

// 9 herança

class NovosProducts extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
      console.log(`${color}`);
    });
  }
}

const blusa = new NovosProducts("Blusa nike", 120, ["branca", "preta", "cinza"]);
console.log(blusa);
blusa.showColors();