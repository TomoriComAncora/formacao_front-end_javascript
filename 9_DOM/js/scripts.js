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

// 7 appendchild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

const produtos = document.querySelector("#main-container");
const product = document.querySelector(".product");

const tituloProduct = document.createElement("h2");
tituloProduct.textContent = "Produto 3";

const descricao = document.createElement("p");
descricao.textContent = "Descrição";

produtos.appendChild(tituloProduct);
produtos.appendChild(descricao);


// 8 replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Novo Título";

const tituloProdutos = document.createElement("h1");
tituloProdutos.textContent = "Produtos";

div.replaceChild(tituloProdutos,h1);
header.replaceChild(h2, title);

// 9 createTextNode
const myText = document.createTextNode("Criando mais um título");

const h3 = document.createElement("h3");
h3.appendChild(myText);

produtos.appendChild(h3);

// 10 trabalhando com atributos
const firsLink = navLinks.querySelector("a");
console.log(firsLink)

console.log(firsLink.getAttribute("href"));
firsLink.setAttribute("href", "https://www.google.com");
console.log(firsLink.getAttribute("href"));
firsLink.setAttribute("target", "blank");

// 11 altura e largura
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 posionamento do elemento
const products1 = produtctQuerry[0];
console.log(products1.getBoundingClientRect());

// 13 js com css
produtos.style.color = "red";
produtos.style.backgroundColor = "#DDD";
produtos.style.padding = "10px 20px";

// 14 estilizando vários componentes
for(const li of listItens){
    li.style.backgroundColor = "#F00";
}