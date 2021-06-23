let a = 4;
let b = 7;
let c = 10;

let operacao;
operacao = "modulo";
let situacao;

//Questão 1:

switch (operacao) {
  case "adicao":
    console.log("A soma dos dois algarismos é igual a: ", a + b);
    break;

  case "subtracao":
    console.log("A subtração dos dois algarismos é igual a: ", a - b);
    break;

  case "multiplicacao":
    console.log("O produto dos dois algarismos é igual a: ", a * b);
    break;

  case "divisao":
    console.log("A divisão dos dois algarismos é igual a: ", a / b);
    break;

  case "modulo":
    console.log("O módulo dos dois algarismos é igual a: ", a % b);
    break;


  default:
    console.log("Operação não válida, procure um médico...");
}

//Questão 2:

if (a > b) {
  console.log("O maior valor é: ", a);
  situacao = a > b;
} else if (a < b) {
  console.log("O maior valor é: ", b);
  situacao = a < b
} else {
  console.log("Os dois valores são idênticos ou não são números, fica o mistério no ar!");
  situacao = a == b
}

//Questão 3:

switch (situacao) {
  case a > b:
    if (a > c) {
      console.log("O maior valor é: ", a);
    } else if (a < c) {
      console.log("O maior valor é: ", c);
    } else {
      console.log("Os dois valores A e C são idênticos ou alguém não é um número, fica o mistério no ar!");
    }
    break;

  case a < b:
    if (b > c) {
      console.log("O maior valor é: ", b);
    } else if (b < c) {
      console.log("O maior valor é: ", c);
    } else {
      console.log("Os dois valores B e C são idênticos ou alguém não é um número, fica o mistério no ar!");
    }
    break;

  case a == b:
    if (a > c) {
      console.log("A e B são iguais e o maior valor é: ", a, );
    } else if (a < c) {
      console.log("O maior valor é: ", c);
    } else {
      console.log("Talvez todos os valores sejam iguais, ou talvez não. Jamais saberemos...");
    }
    break;

  default:
    console.log("Tem certeza que escolheu números dessa realidade para compará-los? Reveja seus conceitos!");
}

//Questão 4:

let d = -5;
let sinal;

if (d > 0) {
  sinal = "positive"
} else if (d < 0) {
  sinal = "negative"
} else {
  sinal = "zero"
}

switch (sinal) {
  case "positive":
    console.log("Este número é: ", sinal);
    break;

  case "negative":
    console.log("Este número é: ", sinal);
    break;

  case "zero":
    console.log("Este número é: ", sinal);
    break;

  default:
    console.log("Talvez você tenha encontrado um novo padrão, fique feliz, mas verifique se não foi um erro!")

}

//Questão 5:

let angA = -70;
let angB = 60;
let angC = 60;
let somaAngInterno = angA + angB + angC;
let triangulo;

if (angA > 0 && angB > 0 && angC > 0) {
  if (somaAngInterno === 180) {
    triangulo = true;
  } else {
    triangulo = false;
  }
  console.log(triangulo);
} else {
  console.log("Angulo negativo só no mundo do buraco negativo! Que tal rever onde está o erro?")
}

//Questão 6:

let chess = "REI";

switch (chess.toLowerCase()) {
  case "rei":
    console.log("Os movimentos para a peça", chess, "são em qualquer direção e apenas uma casa por vez (fora na jogada ROCK).");
    break;

  case "rainha":
    console.log("Os movimentos para a peça", chess, "são pra onde ela quiser, o corpo é dela, a regra é dela.");
    break;

  case "bispo":
    console.log("Os movimentos para a peça", chess, "são em diagonal, se não estiver rezando ajoelhado.");
    break;

  case "cavalo":
    console.log("Os movimentos para a peça", chess, "são em L e pula por cima de todo mundo sem machucar.");
    break;

  case "torre":
    console.log("Os movimentos para a peça", chess, "são na vertical e na horizontal.");
    break;

  case "peao":
    console.log("Os movimentos para a peça", chess, "são pra frente ou na diagonal se for pra cometer um crime, sempre de uma em uma com exceção da primeira vez que se movimentar.");
    break;

  default:
    console.log("Estamos falando do mesmo jogo? Olha só Google, o que surgiu aqui...")

}

//Questão 7:

let porcentagem = 101;

switch (true) {

  case porcentagem < 0:
    break;

  case porcentagem < 50:
    console.log("F");
    break;

  case porcentagem < 60:
    console.log("E");
    break;

  case porcentagem < 70:
    console.log("D");
    break;

  case porcentagem < 80:
    console.log("C");
    break;

  case porcentagem < 90:
    console.log("B");
    break;

  case porcentagem < 100:
    console.log("A");
    break;
  
  default:
    console.log("Rapazo(a), tu é o bichão mermo, hein...!")
}

//Questão 8:

let num1 = a%2;
let num2 = b%2;
let num3 = c%2;

let peloMenosUmPar;

if (num1 === 0 || num2 === 0 || num3 === 0){
  peloMenosUmPar = true;
}else {
  peloMenosUmPar = false;
}

console.log(peloMenosUmPar);

//Questão 9:

let peloMenosUmImpar;

if (num1 != 0 || num2 != 0 || num3 != 0){
  peloMenosUmImpar = true;
}else {
  peloMenosUmImpar = false;
}

console.log(peloMenosUmImpar);

//Questão 10:

let valorCusto = -1000;
let valorVenda = 2000;

let impostoSobreOCusto = 0.2 * valorCusto;

let valorCustoTotal = valorCusto + impostoSobreOCusto;

let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0){
  console.log("Vende a empresa que tem algo errado. Como que tem valor negativo nessa bagaça?")
}else {
  console.log(lucro*1000);
}

