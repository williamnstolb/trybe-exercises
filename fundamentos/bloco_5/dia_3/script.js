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
    if(dezDaysList[index]===24 || dezDaysList[index]===25 || dezDaysList[index]===31){
      item.classList.add('holiday');
    }

    if(dezDaysList[index]===4 || dezDaysList[index]===11 || dezDaysList[index]===18 || dezDaysList[index]===25){
      item.classList.add('friday');
    }

    item.innerText = dezDaysList[index];
    listaDeDias.appendChild(item);
  }
}
//Exercicio 2:
function feriados(Feriados){

  let buttonFeriado = document.createElement('button');
  let buttonTexto = document.createTextNode(Feriados);
  buttonFeriado.id = 'btn-holiday';
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  buttonsContainer.appendChild(buttonFeriado);
}
//Exercicio 3:


//Exercicio 4:
function sextou(sexta){

  let buttonSexta = document.createElement('button');
  let buttonTexto = document.createTextNode(sexta);
  buttonSexta.id = 'btn-friday';
  let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
  buttonsContainer.appendChild(buttonSexta);
}