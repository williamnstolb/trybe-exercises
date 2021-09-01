import Pokedex from './component/Pokedex'
import pokemons from './data';

function App() {
  return (
    <Pokedex pokeList = { pokemons }/>
  );
}

export default App;
