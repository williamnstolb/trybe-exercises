function mudaTexto() {
  document.getElementsByTagName("p")[0].innerText = "1 ano após ter me formado na trybe e com toda a experiência acumulada com investimentos eu estou com um patrimônio bem satisfatório, melhor que as projeções que havia fetio. É uma maravilha trabalhar remotamente e meu inglês está melhorando.";
};

function mudaCorRetangulosExternos(cor) {
  document.getElementsByClassName("main-content")[0].style.backgroundColor = "cor";
}

function mudaCorRetanguloInterno(cor) {
  document.getElementsByClassName("center-content")[0].style.backgroundColor = "cor";
}

function corrigeTitle() {
  document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";
}

function upperCase() {
  for (let n = 0; n < document.getElementsByTagName("p"); n += 1) {
    document.getElementsByTagName("p")[n] = document.getElementsByTagName("p")[n].innerText.toUpperCase();
  }
}

