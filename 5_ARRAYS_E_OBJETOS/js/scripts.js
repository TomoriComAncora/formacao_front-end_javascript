// 1 arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["Lucas", 1, 2.44, lista, []];
console.log(itens);

// 2 mais sobre arrays

const letras1 = ["a", "b", "c", "d"];
console.log(letras1[0]);
console.log(letras1[1]);
console.log(letras1[2]);

// 3 Porpriedades
const nums1 = [1, 2, 3, 4];
console.log(nums1.length);

const myName = "Lucas";
console.log(myName.length);

// 4 métodos
const outrosNume = [6, 7, 8, 9];

const todosNume = nums1.concat(outrosNume);
console.log(todosNume);

const text = "Alguma coisa";
console.log(text.toUpperCase());
console.log(text.indexOf("i"));

// 5 objetos
const pessoa = {
  nome: "Lucas",
  idade: 21,
  trabalho: "T.I",
};

console.log(pessoa);
console.log(pessoa.nome);

// 6 criando e deletando propriedades
const carro = {
  motor: 2.0,
  marca: "VW",
  modelo: "Golf",
  KM: 100000,
};

console.log(carro);
carro.portas = 5;
console.log(carro);
delete carro.KM;
console.log(carro);

// 7 mais sobre objetos
const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);
console.log(obj2);

// 8 conhecendo mais sobre objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(carro));

console.log(Object.entries(obj));
console.log(Object.entries(carro));

// 9 Mutação
const a = {
  nome: "Lucas",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.idade = 21;

console.log(a);
console.log(b);

delete b.nome;

console.log(a);
console.log(b);

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

// 14 slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subSubarray = subArray2.slice(0, 2);
console.log(subSubarray);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

const subArray4 = testeSlice.slice(1);
console.log(subArray4);

// 15 foreach
const nums = [1, 2, 3, 4, 5, 6];
nums.forEach((numero) => {
  console.log(`O número é ${numero}`);
});

const posts = [
  { titulo: "Primeiro post", categoria: "PHP" },
  { titulo: "Segundo post", categoria: "JavaScript" },
  { titulo: "Terceiro post", categoria: "Python" },
];

posts.forEach((post) => {
  console.log(`${post.titulo}, da categoria ${post.categoria}`);
});

// 16 includes
const marcas = ["BMW", "VW", "Audi"];

console.log(marcas.includes("VW"));
console.log(marcas.includes("Fiat"));

if (marcas.includes("VW")) {
  console.log("Há carros da marca VW");
}

// 17 reverse
const reverseTeste = [5, 4, 3, 2, 1];

console.log(reverseTeste);
reverseTeste.reverse();
console.log(reverseTeste);

// 18 strings:trim
const testeTrim = "  testando   mais uma\n  ";

console.log(testeTrim);
console.log(testeTrim.trim());

console.log(testeTrim.length);
console.log(testeTrim.trim().length);

// 19 string:padStart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");
console.log(testePadStart);
console.log(newNumber);

const lastEnd = testePadStart.padEnd(10, "0");
console.log(lastEnd);

// 20 string: split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayFrase = frase.split(" ");
console.log(arrayFrase);

// 21 string: join
const fraseDeNovo = arrayFrase.join(" ");
console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Monitor", "Teclado"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;
console.log(fraseDeCompra);

// 22 string: repeat
const palavra = "Testando ";

const palavraRepetida = palavra.repeat(5);
console.log(palavraRepetida);

// 23 Rest Operator
const somaInfinita = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(142, 5, 26));

// 24 for of
const diferencaInfinita = (...args) => {
  let total = 0;

  for (num of args) {
    total -= num;
  }

  return total;
};

console.log(diferencaInfinita(1, 2, 3));
console.log(diferencaInfinita(1, 2, 3, 453, 463, 23, 66));

// 25 destructuring em objetos
const userDetails = {
  firstName: "Lucas",
  lastName: "Fernando",
  job: "T.I",
};

const { firstName, lastName, job } = userDetails;

console.log(
  `O ${firstName} ${lastName} trabalha no setor de ${job} da Santa Casa`
);

// Renomear variaveis
const {
  firstName: primeiroNome,
  lastName: segundoNome,
  job: trabalho,
} = userDetails;
console.log(primeiroNome, segundoNome, trabalho);

// 26 destructuring em arrays
const meusVeiculos = ["Carro", "moto", "bicicleta"];

const [veiculoA, veiculoB, veiculoC] = meusVeiculos;
console.log(veiculoA, veiculoB, veiculoC);

// 27 JSON
const myJson =
  '{"nome": "Lucas", "idade": "21", "skills": ["html", "css", "javaScript", "python"]}';
console.log(myJson);

// 28 conventer JSON para objeto e objeto para JSON
const myObj = JSON.parse(myJson);
console.log(myObj);
console.log(myObj.skills);

const { nome: novoNome, idade: novaIdade, skills } = myObj;
console.log(`${novoNome} tem ${novaIdade} e tem essas skills ${skills}`);

myObj.trabalhando = true;

console.log(myObj);

const myNewJson = JSON.stringify(myObj);
console.log(myNewJson);
