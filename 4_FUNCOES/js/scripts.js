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
    return (n3 + n4) / (n1 - n2);
}

resultado = conta(a, b, c, d);
console.log(`A conta maluca deu esse resultado: ${resultado}`);