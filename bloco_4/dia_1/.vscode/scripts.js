let a = 4;
let b = 4;

let operacao;
operacao = "modulo";

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

if (a > b) {console.log("O maior valor é: ", a);}
else if (a<b) {console.log("O maior valor é: ", b);}
else {console.log("Os dois valores são idênticos ou não são números, fica o mistério no ar!");}

