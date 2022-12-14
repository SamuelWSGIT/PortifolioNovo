const navItens = document.querySelectorAll("nav a");

navItens.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

const botaoShow = document.querySelector(".whatsapp__icon");
const hideBtn = document.querySelector(".linkHide img");

botaoShow.addEventListener("mouseover", function () {
  hideBtn.classList.add("show");
  hideBtn.classList.remove("hide");
});

botaoShow.addEventListener("mouseout", function () {
  hideBtn.classList.add("hide");
  hideBtn.classList.remove("show");
});

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 50 * i);
  });
}

const textoAnimado = document.querySelector(".textoAnimado p");
const titulo = document.querySelector(".textoAnimado h2");
typeWrite(textoAnimado);
typeWrite(titulo);

const inputContainer = document.querySelector(".checkbox");
const bodyElement = document.documentElement;

const lightTheme = {
  "--font-primaria": "Montserrat , sans-serif",
  "--font-secundaria": "Open Sans , sans-serif",
  "--fonte-nome": "Dancing Script , cursive",
  "--banner-img-black": "#f9f9f9 url(../src/svg/banner-white.svg) no-repeat top",
  "--sobre-img-black": "#f9f9f9 url(../src/svg/background-white.svg) no-repeat top fixed",
  "--skills-img-black": "#f9f9f9 url(../src/svg/backgroud-skills-white.svg) no-repeat top",
  "--projetos-img-black": "#f9f9f9 url(../src/svg/background-projetos.svg) no-repeat top fixed",
  "--contatos-img-black": "#f9f9f9 url(../src/svg/background-contato.svg) no-repeat top",
  "--rodape-img-black": "#f9f9f9 url(../src/svg/background-rodape.svg) center",
  "--input-text-color-gree": "green",
  "--input-text-color-red": "red",
  "--text-color-preta": "#000",
  "--text-color-dourada": "rgb(218, 165, 32)",
  "--cor-de-borda-dourada": "rgb(218, 165, 32)",
  "--cor-de-fundo-branca": "#f9f9f9",
  "--cor-de-fundo-cinza": "#bebebe",
  "--cor-de-div-branca": "#ffffff",
  "--cor-de-div-cinza": "#d9d9d9",
  "--cor-de-div-preta": "rgba(0, 0, 0, 0.8)",
  "--cor-de-borda-dourada-transparente": "rgba(218, 165, 32, 0.4)",
};

const darkTheme = {
  "--font-primaria": "Montserrat , sans-serif",
  "--font-secundaria": "Open Sans , sans-serif",
  "--fonte-nome": "Dancing Script , cursive",
  "--banner-img-black": "rgba(24, 33, 43, 1) url(../src/svg/banner-black.svg) no-repeat top",
  "--sobre-img-black": "rgba(24, 33, 43, 1) url(../src/svg/background-black.svg) no-repeat top fixed",
  "--skills-img-black": "rgba(24, 33, 43, 1) url(../src/svg/background-skills-black.svg) no-repeat top",
  "--projetos-img-black": "rgba(24, 33, 43, 1) url(../src/svg/background-projetos-black.svg) no-repeat top fixed",
  "--contatos-img-black": "rgba(24, 33, 43, 1) url(../src/svg/background-contatos-black.svg) no-repeat top",
  "--rodape-img-black": "rgba(24, 33, 43, 1) url(../src/svg/background-rodape-dark.svg) center",
  "--input-text-color-gree": "green",
  "--input-text-color-red": "red",
  "--text-color-preta": "#fff",
  "--text-color-dourada": "rgb(218, 165, 32)",
  "--cor-de-borda-dourada": "rgb(218, 165, 32)",
  "--cor-de-fundo-branca": "rgba(24, 33, 43, 1)",
  "--cor-de-fundo-cinza": "rgba(47, 57, 67, 1)",
  "--cor-de-div-branca": "rgba(24, 33, 43, 1)",
  "--cor-de-div-cinza": "rgba(47, 57, 67, 1)",
  "--cor-de-div-preta": "rgba(0, 0, 0, 0.8)",
  "--cor-de-borda-dourada-transparente": "rgba(218, 165, 32, 0.4)",
};

inputContainer.addEventListener("change", function () {
  const isChecked = inputContainer.checked;
  if (isChecked) {
    changeTheme(darkTheme);
  } else {
    changeTheme(lightTheme);
  }
});

function changeTheme(theme) {
  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  }
}

function changeProperty(property, value) {
  bodyElement.style.setProperty(property, value);
}
