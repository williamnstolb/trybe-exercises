import React from 'react';
//import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokeInfo } = this.props;
    // console.log(pokeInfo);
    const {name, type, averageWeight, image} = pokeInfo;
    const peso = `${averageWeight.value} ${averageWeight.measurementUnit}`;

    return (
      <section className = 'pokedex'>
      <img src={image} alt='pikachu'></img>
      <p>{name}</p>
      <p>{type}</p>
      <p>Peso médio: {peso}</p>
      </section>
    )
  }
}

export default Pokemon;