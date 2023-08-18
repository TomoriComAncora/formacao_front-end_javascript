// 1 setTimeout
console.log("Ainda não executou");

setTimeout(function () {
  console.log("Requisição assíncrona");
}, 5000);

console.log("Ainda não executou2");

// 2 setInterval
console.log("Ainda não começou");

// setInterval(function () {
//   console.log("Intervalo assícrono");
// }, 3000);

console.log("Ainda não começou2");

// 3 promises

const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa
  .then((qlqrcoisa) => {
    console.log(`A soma é ${qlqrcoisa}`);
    return qlqrcoisa;
  })
  .then((qlqrcoisa) => qlqrcoisa - 1)
  .then((qlqrcoisa) => console.log(`Agora velue é ${qlqrcoisa}`));

console.log("Algum código2");

// 4 falha na promise
Promise.resolve(4 * "ssgd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valor inválidoo");
    }
  })
  .catch((e) => console.log(`Um erro aconteceu: ${e}`));
