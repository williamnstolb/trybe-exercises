let a = 4;
let b = 5;
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

if (a > b) {console.log("O maior valor é: ", a); situacao = a>b;}
else if (a < b) {console.log("O maior valor é: ", b); situacao = a<b}
else {console.log("Os dois valores são idênticos ou não são números, fica o mistério no ar!"); situacao = a==b}

//Questão 3:

switch (situacao){
  case a>b:
    if (a > c) {console.log("O maior valor é: ", a);}
    else if (a < c) {console.log("O maior valor é: ", c);}
    else {console.log("Os dois valores A e C são idênticos ou alguém não é um número, fica o mistério no ar!");}
    break;

    case a<b:
    if (b > c) {console.log("O maior valor é: ", b);}
    else if (b < c) {console.log("O maior valor é: ", c);}
    else {console.log("Os dois valores B e C são idênticos ou alguém não é um número, fica o mistério no ar!");}
    break;

    case a==b:
    if (a > c) {console.log("A e B são iguais e o maior valor é: ", a,);}
    else if (a < c) {console.log("O maior valor é: ", c);}
    else {console.log("Talvez todos os valores sejam iguais, ou talvez não. Jamais saberemos...");}
      break;
  
    default:
      console.log("Tem certeza que escolheu números dessa realidade para compará-los? Reveja seus conceitos!");
}
