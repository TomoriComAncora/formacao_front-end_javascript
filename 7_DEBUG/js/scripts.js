// 1 strict
"use strict";

let opa = "teste";

// 2 console.log
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// 3 debugger
let c = 1;
let d = 2;

if (c == 1) {
  c = d + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
  c = c + d;
  console.log(c);
}

console.log(c);
// debugger;

// 4 - tratamento de dados
function checarNumero(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("Valor inválido");
    return;
  }
  console.log("Próximo");
  return result;
}

checarNumero(NaN);
checarNumero(4);
checarNumero("f");
checarNumero("2");
checarNumero({});

// 5 exections
let x = 10;

if (x != 11) {
  // throw new Error("O valor de X não pode ser diferente de 11");
}

// 6 try catch
try {
  let soma = x + y;
} catch (e) {
  console.log(`Erro no programa: ${e}`);
}

// 7 finally
try {
  const value = checarNumero("ds");
  if (!value) {
    throw new Error("valores inválidos");
  }
} catch (e) {
  console.log(`Opa, aconteceu algo de errado: ${e}`);
} finally {
  console.log("O código foi executado até aqui!");
}

// 8 assertion
function checkarray(arr) {
  if (arr.length === 0) {
    throw new Error("O array precisa de elementos");
  } else {
    console.log(`O array tem ${arr.length} elementos`);
  }
}

// checkarray([]);
checkarray([1,3,4,6]);