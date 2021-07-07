function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
criaDiasNoCalendario();
feriados('Feriados');
sextou('Sexta-feira');

// Escreva seu código abaixo.
//Exercicio 1:
function criaDiasNoCalendario() {

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let listaDeDias = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {

    let item = document.createElement("li");
    item.className = 'day';
    //para add uma nova classe a um item que ja possui classe se usa classList.add('nova classe')
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      item.classList.add('holiday');
    }

    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
      item.classList.add('friday');
    }

    item.innerText = dezDaysList[index];
    listaDeDias.appendChild(item);
  }
}
//Exercicio 2:
function feriados(Feriados) {

  let buttonFeriado = document.createElement('button');
  let buttonTexto = document.createTextNode(Feriados);
  buttonFeriado.appendChild(buttonTexto);
  buttonFeriado.id = 'btn-holiday';
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  buttonsContainer.appendChild(buttonFeriado);
}
//Exercicio 3:
//Usado para aprender a criar um botao e colocar nome: https://pt.stackoverflow.com/questions/217656/criar-botao-usando-document-createelement
let clickButtonFeriado = document.getElementById('btn-holiday');
clickButtonFeriado.addEventListener('click', recebeClick);

function recebeClick() {
  let corFundo = document.getElementsByClassName('holiday')[0].style.backgroundColor;
  let diaFeriados = document.getElementsByClassName('holiday');

  if (corFundo !== 'green') {
    mudaFundo('green', diaFeriados);
    corFundo = 'green';
  }else{
    mudaFundo('rgb(238,238,238)', diaFeriados);
    }
}
//Função auxiliar de recebeClick para evitar dois for, facilitando a leitura do codigo.
function mudaFundo(cor, diaFeriados){
  for (let index = 0; index < diaFeriados.length; index += 1) {
    document.getElementsByClassName('holiday')[index].style.backgroundColor = cor;
  }
}

//Exercicio 4:
function sextou(sexta) {

  let buttonSexta = document.createElement('button');
  let buttonTexto = document.createTextNode(sexta);
  buttonSexta.appendChild(buttonTexto);
  buttonSexta.id = 'btn-friday';
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  buttonsContainer.appendChild(buttonSexta);
}