import Botao from './components/Botao.jsx'
import './App.css';

function imprimeTexto(x) {
  console.log(`Esse não é o botão ${x}`);
}

function App() {
  return (
    <div className="App">
     <Botao />
     <button onClick={ imprimeTexto(3) } >botão 2</button>
     <button onClick={ imprimeTexto(1) } >botão 3</button>
    </div>
  );
}

export default App;
