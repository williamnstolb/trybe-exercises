//Parte 1 - Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
}

//1
console.log("Bem-vinda,",info.personagem);
//2
console.log(info.recorrente);
//3
for(let index in info){
  console.log(index);
}
//4
for(let index in info){
  console.log(info[index]);
}



