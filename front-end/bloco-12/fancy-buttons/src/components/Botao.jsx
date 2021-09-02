import React from "react";

function imprimeTexto() {
  console.log('Esse não é o botão 2');
}

class Botao extends React.Component {
  render() {
    return (
      <button onClick={ imprimeTexto } >botão 1</button>
    );
  }
}

export default Botao;