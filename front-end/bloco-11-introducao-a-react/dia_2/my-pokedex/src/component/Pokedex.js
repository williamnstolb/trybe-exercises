import React from 'react';
import Pokemon from './Pokemon'
import '../App.css';
//import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    const { pokeList } = this.props;    
    return (
      pokeList.map((pokemon) => <Pokemon pokeInfo = { pokemon }/>)
    )
  }
}

export default Pokedex;