// // 1 setTimeout
// console.log("Ainda não executou");

// setTimeout(function () {
//   console.log("Requisição assíncrona");
// }, 5000);

// console.log("Ainda não executou2");

// // 2 setInterval
// console.log("Ainda não começou");

// // setInterval(function () {
// //   console.log("Intervalo assícrono");
// // }, 3000);

// console.log("Ainda não começou2");

// // 3 promises

// const promessa = Promise.resolve(5 + 5);

// console.log("Algum código");

// promessa
//   .then((qlqrcoisa) => {
//     console.log(`A soma é ${qlqrcoisa}`);
//     return qlqrcoisa;
//   })
//   .then((qlqrcoisa) => qlqrcoisa - 1)
//   .then((qlqrcoisa) => console.log(`Agora velue é ${qlqrcoisa}`));

// console.log("Algum código2");

// // 4 falha na promise
// Promise.resolve(4 * "ssgd")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Valor inválidoo");
//     }
//   })
//   .catch((e) => console.log(`Um erro aconteceu: ${e}`));

// 5 rejeição de promise
function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10`);
    } else {
      reject(new Error(`O número é muito baixo!`));
    }
  });
}
const a = checkNumber(20);
const b = checkNumber(10);

console.log(a, b);

a.then((valor) => console.log(`O resultado é ${valor}`)).catch((e) =>
  console.log(`Um erro aconteceuafasf: ${e}`)
);
b.then((valor) => console.log(`O resultado é ${valor}`)).catch((e) =>
  console.log(`Um erro aconteceu: ${e}`)
);

// 6 all promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 2000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject(new Error("Erro!"));
  }
});

p3.then((valor) => console.log(`${valor}`)).catch((e) =>
  console.log(`Ùm erro aconteceu: ${e}`)
);
Promise.all([p1, p2, p3]).then((value) => console.log(`O valor é ${value}`));

// 7 async functions
async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(1, 1).then((value) => {
  console.log(`A soma é:${value}`);
});

console.log("Teste async");

// 8 await
function resolveComDelay(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n + 1);
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a Promise, e esperando o resultado");
  const result = await resolveComDelay(1);
  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// 9 generators
function* generator(){
  yield 1;
  yield 2;
  yield 4;
  yield "ds";
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
