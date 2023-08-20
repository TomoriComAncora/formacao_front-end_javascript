// 1 movendo pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1].textContent);
console.log(document.body.childNodes[1].childNodes[3].textContent);
console.log(document.body.childNodes[1].textContent);
console.log(document.body.childNodes[1].childNodes[3].textContent);

// 2 selecionando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 selecionando elemento por id
const title = document.getElementById("title");

console.log(title);

// 4 selecionando elemento por classe
const itens = document.getElementsByClassName("product");

console.log(itens);

// 5 selecionando elemento por css
const produtctQuerry = document.querySelectorAll(".product");

console.log(produtctQuerry);

const produtctQuerry2 = document.querySelector(".product");

console.log(produtctQuerry2);

// 6 insertBefore
const p = document.createElement("p");

const header = title.parentElement;
console.log(header);

header.insertBefore(p, title);

const h1 = document.createElement("h1");

const div = produtctQuerry2.parentElement;
console.log(div);

div.insertBefore(h1, produtctQuerry2);