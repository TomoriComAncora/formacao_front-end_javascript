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
