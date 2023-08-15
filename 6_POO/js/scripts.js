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

// 6 função como classe - função construtora
function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const pitbull = criarCachorro("Lee", "Pitbull");
console.log(pitbull);

console.log(Object.getPrototypeOf(pitbull));

// 7 funçaõ como classe
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ichigo", "Husky");
console.log(husky);
console.log(Object.getPrototypeOf(husky));

// 8 métodos na funcao construtora
Cachorro.prototype.uivar = function () {
  console.log("Auuuuuuu!");
};

console.log(Cachorro.prototype);
husky.uivar();

// 9 classe es6
class CachorroClass {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const tupa = new CachorroClass("Tupã", "yalhaza");
console.log(tupa);
console.log(tupa.nome);
console.log(Object.getPrototypeOf(tupa));

// 10 mais sobre classes
class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`O caminhão tem ${this.eixos} eixos e é ${this.cor}`);
  }
}

const caminhao = new Caminhao(8, "Preto");
console.log(caminhao);
caminhao.descreverCaminhao();

// 11 override
class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const lucas = new Humano("Lucas", 21);
console.log(lucas);
console.log(Humano.prototype.idade);
Humano.prototype.idade = 32;

console.log(lucas);
console.log(Humano.prototype.idade);

// 12 symbol
class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", "8");
console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 13 get e set
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirPost() {
    return `Voce está lendo o post sobre ${this.titulo}, ${this.descricao}`;
  }

  set inserirTags(tags) {
    const tagsarray = tags.split(", ");
    this.tags = tagsarray;
  }
}

const post = new Post(
  "Novo celular",
  "Samsung quebra mercado com novo smartphone"
);
console.log(post);
console.log(post.exibirPost);

post.inserirTags = "javaScript, programação, js";
console.log(post);
console.log(post.exibirPost);

// 14 herança
class Animal {
  constructor(pelos) {
    this.pelos = pelos;
  }
}

class Mamifero extends Animal {
  constructor(pelos, patas) {
    super(pelos, pelos);
    this.patas = patas;
  }
}

class Lobos extends Mamifero {
  constructor(patas, pelos, nome) {
    super(pelos, patas, pelos, patas);
    this.nome = nome;
  }
}

const lobinho = new Lobos(4, true, "Kravem");
console.log(lobinho);

const lobao = new Lobos(8, false, "Kiba");
console.log(lobao);

console.log(lobao.pelos);

// 15 instanceof
console.log(lobao instanceof Animal);
console.log(lobao instanceof Mamifero);
console.log(Lobos instanceof Animal);
console.log(new Lobos(4, true, "Lobo do mato")instanceof Animal);
