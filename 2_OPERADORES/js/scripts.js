// 1 Number
console.log(typeof 2);
console.log(typeof 2.453);
console.log(typeof -29);

// 2 opr. aritimético
console.log(7 + 17 + 4 - 8);
console.log(3 + 2 * (8 / 3));

// 3 special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(typeof 3/0);
console.log(typeof 34 * "fsdf");
console.log(typeof NaN);

// 4 string
console.log("Um texto");
console.log(`Mais um texto`);
console.log('+ 1 outro texto');
console.log("11");

console.log(typeof "Um texto");
console.log(typeof `Mais um texto`);
console.log(typeof '+ 1 outro texto');

// 5 caracteres especiais
console.log("Testando a \nQuebra de linha");
console.log("Espaçamento de \t tab");

// 6 concatenação
console.log("Oi," + "tudo " + "bem ?");
console.log(`Testando ` + `com ` + `crase`);

// 7 Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa ${console.log("Lucas")}`);

// 8 Booleans
console.log(true);
console.log(typeof true);
console.log(3 > 4);
console.log(4 > 3);

// 9 comparação
console.log(5 >= 3);
console.log(5 >= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log("10" == 10);
console.log("10" === 10);
console.log(10 != 9);

// 10 idêntico
console.log("8" == 8);
console.log(9 != "9");
console.log("9" !== 9);

// 11 operadores lógicos
console.log(true && true);
console.log(false && true);

console.log(3 < 9 && 9 > 2);

console.log(2 == 2 && "lucas" === 11);
console.log(2 == 2 || "lucas" === 11);

console.log("oi" === 2 || "oi2" === 4);

console.log(!true);
console.log(!5 > 2);

// 12 empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);
console.log(null == undefined);

console.log(null == false);
console.log(undefined == false);

// 13 mudança de valores
console.log(5 * null);

console.log("e" * "a");

console.log("10" + 1);
console.log("10" - 1);