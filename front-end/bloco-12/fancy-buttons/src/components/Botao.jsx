import React from "react";

class Botao extends React.Component {
  constructor() {
    super();
    this.imprimeTexto = this.imprimeTexto.bind(this);
  }

  imprimeTexto() {
    console.log(`Esse não é o botão`);
  }

  render() {
    return (
      <>
        <button onClick={this.imprimeTexto}>botão 1</button>
        <button onClick={this.imprimeTexto}>botão 2</button>
        <button onClick={this.imprimeTexto}>botão 3</button>
      </>
    );
  }
}

export default Botao;
