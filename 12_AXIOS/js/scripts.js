// 1 instalação
console.log(axios);

// 2 primeiro request
const getData = async () => {
  try {
    const response = await postFetch.get(
      "/users",
      //   4 hearder
      {
        headers: {
          "Content-Type": "application/json",
          custom: "Meu token",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getData();

// 3 inserindo dados
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();
  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");

    const usuario = document.createElement("h2");

    usuario.textContent = user.name;

    div.appendChild(usuario);

    const username = document.createElement("p");
    username.textContent = user.username;
    div.appendChild(username);

    const id = document.createElement("h3");
    id.textContent = user.id;
    div.appendChild(id);

    container.appendChild(div);
  });
};

printData();

// 5 post
const form = document.querySelector("#post-form");
const inputTitle = document.querySelector("#title");
const inputBody = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  postFetch.post("/posts", {
    title: inputTitle.value,
    body: inputBody.value,
    userId: 1,
  });
});
