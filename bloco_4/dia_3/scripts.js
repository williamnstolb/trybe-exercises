//Questão 1:

let n = 2;

if (n > 0) {
  for (let i = 1; i <= n; i += 1) {
    let listaVazia = [];
    for (let j = 1; j <= n; j += 1) {
      listaVazia.push('*');
    }
    console.log(listaVazia.join('  '));
  }
} else {
  console.log("Valor menor que 1.")
}