import './App.css';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  const list = ['Estudar', 'Tomar banho', 'Ir para o espaço vigiar', 'Se abastecer de 3465', 'Voltar para o planeta'];
  
  return (
    list.map((tarefa => Task(tarefa)))
  );
}

export default App;
