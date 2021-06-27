//Parte 1 - Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
}

//1
console.log("Bem-vinda,", info.personagem);
//2
console.log(info.recorrente);
//3
for (let index in info) {
  console.log(index);
}
//4
for (let index in info) {
  console.log(info[index]);
}
//5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

for (let index in info) {
  if (info[index] != info2[index]) {
    console.log(info[index], "e", info2[index]);
  } else {
    console.log("Ambos recorrentes");
  }
}

//Parte 2 - Funções

function verificaPalindrome(palavra) {
  let ehPalindrome = false;
  let listaPalavra = palavra.split('');
  let ultimaPosicao = listaPalavra.length - 1;

  //Comparador de strings
  //1
  for (let index = 0; index < Math.round(listaPalavra.length / 2); index += 1) {
    if (listaPalavra[index] == listaPalavra[ultimaPosicao]) {
      ehPalindrome = true;
    } else {
      ehPalindrome = false;
      break;
    }
    ultimaPosicao = ultimaPosicao - 1;
  }
  return ehPalindrome;
}

let palavra = 'arara';
console.log(verificaPalindrome(palavra));

palavra = 'desenvolvimento';
console.log(verificaPalindrome(palavra));

//2
function buscaIndiceMaiorValor(lista) {
  let maiorValor = lista[0];
  let indice = 0;

  for (let index = 1; index < lista.length; index += 1) {
    if (maiorValor < lista[index]) {
      maiorValor = lista[index];
      indice = index;
    }
  }
  return indice;
}

let arrayTeste = [2,3,6,7,10,1];
console.log(buscaIndiceMaiorValor(arrayTeste));

//3
function buscaIndiceMenorValor(lista) {
  let menorValor = lista[0];
  let indice = 0;

  for (let index = 1; index < lista.length; index += 1) {
    if (menorValor > lista[index]) {
      maenorValor = lista[index];
      indice = index;
    }
  }
  return indice;
}

let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];
console.log(buscaIndiceMenorValor(arrayTeste2));

//4

function maiorPalavra(lista){

  let maiorPalavra = lista[0];
  for (let index = 1; index < lista.length; index += 1){
    //Transforma as palavras em um array
    let palavra2 = lista[index].split('');
    //Tamanho de cada array para comparar
    let tamanho1 = maiorPalavra.length;
    let tamanho2 = palavra2.length;

    if(tamanho1 < tamanho2){
      maiorPalavra = lista[index];
    }
  }
  //obs: Se duas ou mais possuem o mesmo tamanho, a primeira comparada é retornada
  return maiorPalavra;
} 

let arrayTeste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorPalavra(arrayTeste3));