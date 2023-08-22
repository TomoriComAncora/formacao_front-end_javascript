// 1 adicionando eventos
const botao = document.querySelector("#my-button");

botao.addEventListener("click", function () {
  console.log("Fui clicado!!!");
});

// 2 removendo evento
const btn2 = document.querySelector("#btn2");

function imprimir() {
  console.log("Teste");
  //   btn2.removeEventListener("click", imprimir); removendo depois de um click
}

btn2.addEventListener("click", imprimir);

const outroBtn = document.querySelector("#outroBtn");

outroBtn.addEventListener("click", () => {
  console.log("Removendo");
  btn2.removeEventListener("click", imprimir);
});

// 3 argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.offsetX);
  console.log(e.pointerType);
  console.log(e.target);
});

// 4 propagação
const divbtn = document.querySelector("#btn-container");
const insiderBtn = document.querySelector("#div-btn");

divbtn.addEventListener("click", () => {
  console.log("Evento 1");
});

insiderBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 Evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não alterou a página");
});

// 6 Evento de Tecla
document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Apertou a tecla ${e.key}`);
});

// 7 Outros eventos de mouse
const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", (e) => {
  console.log(`Apertou o botão`);
});

mouse.addEventListener("mouseup", (e) => {
  console.log(`soltou o botão`);
});

mouse.addEventListener("dblclick", (e) => {
  console.log(`Click duplo`);
});

// 8 movimento do mouse
document.addEventListener("mousemove", (e) => {
  // console.log(`No eixo X:${e.x}`);
  // console.log(`No eixo Y:${e.y}`);
});

// 9 Evento com scroll
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    console.log("Passamos de 200px");
  }
});

// 10 evento focus/blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", () => {
  console.log("Está em foco");
});

input.addEventListener("blur", () => {
  console.log("Não está em foco");
});

// 11 Evento de carregamento
window.addEventListener("load", () => {
  console.log("A página carregou!");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "teste";
});

// 12 debounce
const debounce = (f, delay) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(args);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando a cada 400ms");
  }, 400)
);
