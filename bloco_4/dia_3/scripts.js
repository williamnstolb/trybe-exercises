//Questão 1:
console.log("Questão 1:")
let n = 5;

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

//Questão 2:
console.log("Questão 2:")
if (n > 0) {
  let listaVazia = [];

  for (let j = 1; j <= n; j += 1) {
    listaVazia.push('*');
    console.log(listaVazia.join('  '));
  }

} else {
  console.log("Valor menor que 1.")
}

//Questão 3:
console.log("Questão 3:")
if (n > 0) {
  let listaVazia = [];

  //Cria uma lista com espaços vazios.
  for (let j = 1; j <= n; j += 1) {
    listaVazia.push(' ');
  }

  for (let j = n; j >= 1; j -= 1) {
    listaVazia[j] = ['*'];
    console.log(listaVazia.join('  '));
  }

} else {
  console.log("Valor menor que 1.")
}

//Questão 4:
console.log("Questão 4:")

if (n > 0) {
  let listaVazia = [];

  for (let j = 1; j <= n; j += 1) {

    if (j % 2 != 0) {
      listaVazia.push('*');
      for (let i = 2; i >= 0; i -= 1) {
        
        listaVazia.unshift(' ');
      }
    }
      console.log(listaVazia.join('  '));
    
  }
} else {
  console.log("Valor menor que 1.")
}