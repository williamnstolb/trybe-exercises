let a = 10;
let b = 4;

let operacao;
operacao = "modulo";

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

  case "divisão":
    console.log("A divisão dos dois algarismos é igual a: ", a / b);
    break;

  case "modulo":
    console.log("O módulo dos dois algarismos é igual a: ", a % b);
    break;


  default:
    console.log("Operação não válida, procure um médico...");
}