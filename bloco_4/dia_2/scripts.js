let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Questão 1:

for (let index = 0; index < numbers.length; index += 1) {
  // console.log(numbers[index]);
}

//Questão 2:

let somador = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somador = somador + numbers[index];
}
console.log('A soma total é: ', somador);

//Questão 3:

let mediaAritmetica = somador/numbers.length;
console.log('A média aritmética é: ', mediaAritmetica);

//Questão 4:

if (mediaAritmetica > 20){
  console.log('Valor maior que 20');
}else {
  console.log('Valor menor ou igual a 20');
}

//Questão 5:

let maiorValor = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (maiorValor < numbers[index]){
    maiorValor = numbers[index];
  }
}
console.log('O maior valor é: ', maiorValor);

//Questão 6:

let quantImpar = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index]%2 != 0){
    quantImpar += 1;
  }
}
console.log('A quantidade de número(s) impar(es) é: ', quantImpar);

//Questão 7:



//Questão 8:



//Questão 9: