function estadosBr() {
  let estados = [
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goías',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
  ];
  for (let index = 0; index < estados.length; index += 1) {
    let estado = document.createElement('option');
    estado.innerText = estados[index];
    let paiEstado = document.querySelector('#estado');
    paiEstado.appendChild(estado);
  }
}
estadosBr();

const formulario = document.querySelectorAll('.forms');
const buttonInterrompe = document.querySelector('#interrompe');
buttonInterrompe.addEventListener('click', (Event) => {
  Event.preventDefault();
  
  let campo = '';
  let dado = '';
  
  for (let index = 0; index < formulario.length; index += 1) {
    campo = formulario[index].name;
    dado = formulario[index].value;
    const relataFormulario = document.createElement('p');
    if(dado === 'casa' || dado === 'apartamento'){
      campo = 'moradia';
    }
    relataFormulario.innerText = campo + ': ' + dado;
    console.log(relataFormulario.innerText);
    const relatorio = document.querySelector('div');
    relatorio.appendChild(relataFormulario);
  }
})

const buttonReset = document.querySelector('#reset');
buttonReset.addEventListener('click', () => {
    location.reload();
});