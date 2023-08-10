// // 1 arrays
// const lista = [1, 2, 3, 4, 5];

// console.log(lista);
// console.log(typeof lista);

// const itens = ["Lucas", 1, 2.44, lista, []];
// console.log(itens);

// // 2 mais sobre arrays

// const letras = ["a", "b", "c", "d"];
// console.log(letras[0]);
// console.log(letras[1]);
// console.log(letras[2]);

// // 3 Porpriedades
// const nums = [1, 2, 3, 4];
// console.log(nums.length);

// const myName = "Lucas";
// console.log(myName.length);

// // 4 métodos
// const outrosNume = [6, 7, 8, 9];

// const todosNume = nums.concat(outrosNume);
// console.log(todosNume);

// const text = "Alguma coisa";
// console.log(text.toUpperCase());
// console.log(text.indexOf("i"));

// // 5 objetos
// const pessoa = {
//   nome: "Lucas",
//   idade: 21,
//   trabalho: "T.I",
// };

// console.log(pessoa);
// console.log(pessoa.nome);

// // 6 criando e deletando propriedades
// const carro = {
//   motor: 2.0,
//   marca: "VW",
//   modelo: "Golf",
//   KM: 100000,
// };

// console.log(carro);
// carro.portas = 5;
// console.log(carro);
// delete carro.KM;
// console.log(carro);

// // 7 mais sobre objetos
// const obj = {
//   a: "teste",
//   b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj);
// console.log(obj2);

// // 8 conhecendo mais sobre objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(carro));

// console.log(Object.entries(obj));
// console.log(Object.entries(carro));

// // 9 Mutação
// const a = {
//   nome: "Lucas",
// };

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.idade = 21;

// console.log(a);
// console.log(b);

// delete b.nome;

// console.log(a);
// console.log(b);

// 10 loops em array
const users = ["Lucsa", "Pedro", "Vinicius", "Goran"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuário ${users[i]}`);
}

// 11 push e pop
const array = ["a", "b", "c"];

array.push("d");
console.log(array);
console.log(array.length);

array.pop();
console.log(array);

const itemRemovido = array.pop();
console.log(itemRemovido);
console.log(array);

array.push("c", "d", "e", "f");
console.log(array);

// 12 shift e unshift
const letras = ["a", "b", "d"];
console.log(letras);

const letra = letras.shift();
console.log(`A letra removida foi ${letra}`);
console.log(letras);

letras.unshift("p", "q", "r");
console.log(letras);

letras.unshift("s");
console.log(letras);

// 13 indexOf e lastIndexOf
const frutas = ["Morango", "Maçã", "Laranja", "Limão", "Maçã"];

console.log(frutas.indexOf("Laranja"));
console.log(frutas.lastIndexOf("Maçã"));
console.log(frutas.indexOf("Maçã"));

console.log(frutas[2]);
console.log(frutas[frutas.indexOf("Laranja")]);
