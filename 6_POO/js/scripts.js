// 1 métodos
const animal = {
  nome: "Kiki",
  miar: function () {
    console.log("Miaaaau");
  },
};

console.log(animal.nome);
animal.miar();

// 2 mais sobre métodos
const pessoa = {
  nome: "Lucas",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Fernando");
console.log(pessoa.getNome());

// 3 Prototype
const text = "a";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [1];
console.log(Object.getPrototypeOf(arr));

console.log(arr.length);

// 4 mais sobre prototype
const myObject = {
  a: "b",
  teste: "apareci",
};

console.log(Object.getPrototypeOf(myObject));

const mysecundObject = Object.create(myObject);
console.log(mysecundObject);
console.log(mysecundObject.teste);

console.log(Object.getPrototypeOf(mysecundObject) === myObject);

// 5 classes básicas
const cachorro = {
    raca: null,
    patas: 4,
    pelos: null,
};

const cachorro1 = Object.create(cachorro);

cachorro1.raca = "Poodle";
cachorro1.pelos = true;
console.log(cachorro1);

console.log(cachorro1.patas);
