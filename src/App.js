import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import {useState} from 'react';

function App() {

  const [Colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...Colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner></Banner>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador) } ></Formulario>
    
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
