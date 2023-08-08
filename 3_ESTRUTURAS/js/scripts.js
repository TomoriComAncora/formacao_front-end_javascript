// // 1 variáveis
// let nome = "Lucas";

// console.log(nome);

// nome = "Lucas Fernando";

// console.log(nome);

// const idade = 21;

// console.log(idade);

// idade = 22;

// 2 mais sobre variáveis
// let 2teste = "inválido";
// let 2teste = "inválido"

// let a = 10,
//   b = 20,
//   c = 30;

// console.log(a, b, c);

// let nomeCompleto = "Lucas Fernando";
// let nomecompleto = "lucas fernando";

// console.log(nomeCompleto);
// console.log(nomecompleto);

// 3 função prompt
// const age = prompt("Digite sua idade!:");
// console.log(`A sua idade é ${age} anos!`);

// 4 função alert
// alert("testando");

// const teste = 11;
// alert(`Número é ${teste}`);

// // 5 objeto Math
// console.log(Math.max(1, 5, 6, 10));
// console.log(Math.floor(8.23));
// console.log(Math.ceil(7.59));

// // 6 objeto console
// console.log("Exibe mensagem");
// console.error("Erro!");
// console.warn("Aviso!");

// // 7 Estrutura condicional if

// const m = 10;

// if (m > 5) {
//   console.log("M é maior que 5!");
// }

// let nome = "Lucas";

// if (nome === "Lucas") {
//   console.log(`O nome é ${nome}`);
// }

// if (true) {
//   console.log("É verdadeiro");
// }

// if (false) {
//   console.log("É falso");
// }

// // 8 Estrutura condicional else
// const loggedIn = false;

// if (loggedIn) {
//   console.log("Está logado");
// } else {
//   console.log("Não está logado!");
// }

// const w = 20;
// const e = 18;

// if (w > 20 && e < 19) {
//   console.log("Números mais altos");
// } else {
//   console.log("Números mais baixos");
// }

// // 9 Estrutura condicional else if
// if (1 > 2) {
//   console.log("Teste");
// } else if (2 > 3) {
//   console.log("Teste");
// } else if (5 > 1) {
//   console.log("Agora sim!");
// }

// const nome = "Fernando";
// const idade = 21;

// if (nome === "Fernando") {
//   console.log("Olá Fernando");
// } else if (nome === "Lucas" && idade === 21) {
//   console.log("Olá Lucas, você tem 21 anos!");
// } else {
//   console.log("Nenhuma condição atendida");
// }

// // 10 Estrutura de repetição while
// let i = 0;

// while (i < 5) {
//   console.log(`repetindo ${i} vezes`);
//   i = i + 1;
// }

// // loop infinito
// // let x = 10;

// // while (x > 5){
// //   console.log(`repetindo ${x}`);
// // }

// // // 11 Estrutura de repetição do while
// let o = 10;

// do {
//   console.log(`O = a ${o}`);
//   o--;
// } while (o > 0);

// // 12 Estrutura de repetição for
// for (let i = 0; i < 10; i++) {
//   console.log(`Executando o i ${i}X`);
// }

// 13 identação
// // 14 break
// for(let g = 20; g > 10; g--){
//   console.log(`O valor de g é ${g}`);
//   if(g === 14){
//     break;
//   }
// }

// // 15 continue
// for (i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log("é par!");
//         continue;
//     }
//     console.log(i);
// }

// 16 switch
const job = "ti";

switch (job) {
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um Advogado!");
        break;
    case "Engenheiro":
        console.log("Você é um Engenheiro!");
        break;
    default:
        console.log("Você é um VAGABUNDO!");
}
