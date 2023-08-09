// 1 criando função
function minhaFuncao() {
    console.log("Testando");
}

minhaFuncao();
minhaFuncao();
minhaFuncao();

const funcaoEmVariavel = function () {
    console.log("Função anonima em variável");
};

funcaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Isso foi escrito pelo usuário: ${txt}`);
}

funcaoComParametro("Acho que sim!!");
funcaoComParametro("Outra coisa");

function soma(n1, n2){
    console.log(`A soma de ${n1} + ${n2} é: ${n1 + n2}`);
}

soma(1, 1);

// 2 return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma2(n1, n2){
    return n1 + n2;
}

let resultado = soma2(a, d);
console.log(resultado);

function conta(n1, n2, n3, n4){
    return (n3 + n4) / (n1 * n2);
}

resultado = conta(a, b, c, d);
console.log(`A conta maluca deu esse resultado: ${resultado}`);

// 3 Escopo
let y = 20;

function testandoEscopo(){
    let y = 10;
    console.log(`Y dentro da função é ${y}`);
}

testandoEscopo();

console.log(`Y fora da função é ${y}`);

testandoEscopo();

// 4 Escopo aninhado
let m = 10;

function escopoAninhado(){
    let m = 20;

    if(true){
        let m = 30;

        if(true){
            let m = 40;
            console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

escopoAninhado();
console.log(m);

// 5 Arrow function
const testeArrow = () => {
    console.log("Arrow function");
};

testeArrow();

const somaArrow = (n1, n2, n3) => {
    console.log(`A soma desses três números é: ${n1 + n2 + n3}`);
};

somaArrow(1, 1, 1);

const multiplicaArrow = (n1, n2) => {
    return n1 * n2;
};

let resultMult = multiplicaArrow(2, 2);
console.log(`O resultado da multiplicação é: ${resultMult}`);

// 6 Arrow reduzida
const raiz = (n) => n * n;
console.log(raiz(4));
console.log(raiz(19));

const helloWord = () => console.log("Hello word!");

helloWord();

// 7 parametro opcional
const multiplicacao = (m, n) =>{
    if(n === undefined){
        return m * 2;
    }else{
        return m * n;
    }
};

console.log(multiplicacao(5));
console.log(multiplicacao(5, 5));

const saudacao = (nome) =>{
    if(!nome){
        console.log("Olá");
        return
    }

    console.log(`Olá ${nome}`);
};

saudacao();
saudacao("Lucas");

// 8 valor default
const saudacaoCustom = (nome, saudacao = "Olá") => {
    return `${saudacao}, ${nome}`;
};

console.log(saudacaoCustom("Lucas"));
console.log(saudacaoCustom("Lucas", "Bom dia!"));

const repetirTexto = (texto, repetir = 2) => {
    for(let i = 0; i < repetir; i++){
        console.log(`${texto} ${i} vezes`);
    }
};

repetirTexto("Repetindo");
repetirTexto("Repetindo", 4);

// 9 Closure
function somaFuncao(n1, n2){
    let txt = "Algo";
    let result = n1 * n2;
    function display(){
        console.log(txt);
    }

    function imparPar(){
        if(result % 2 === 0){
            console.log("Par");
        }else{
            console.log("Ímpar");
        }
    }

    imparPar()

    display();
}

somaFuncao(2, 2);
somaFuncao(3, 5);

// 10 mais sobre Closure
const mutiplicationClosure = (n) =>{
    return (m) => n * m;
};

const c1 = mutiplicationClosure(5);
const c2 = mutiplicationClosure(20);

console.log(c1);
console.log(c2);
console.log(c2(2));
console.log(c2(2));

const contador = () => {
    let count = 0;

    return () =>{
        return count++;
    }
}

const contador1 = contador();
console.log(contador1());
console.log(contador1());
console.log(contador1());

// 11 recursão
const menorDez = (n, m) =>{
    if(n < 10){
        console.log("A função Parou!");
    }else{
        const x = n - m;

        console.log(x);

        menorDez(x, m);
    }
};

menorDez(100, 7);

const fatorial = (x) => {
    if(x === 0){
        return 1;
    }else{
        return x * fatorial(x - 1);
    }
};

const num =  6;
const result = fatorial(num);

console.log(`O fatorial de ${num} é ${result}`);