import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import {useState} from 'react';
import Time from './componentes/Time';
import {props} from 'react';

function App() {

  const times  = [
    {


      nome:'Programação',
      corPrimaria: '#57c278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria:'#E8F8F'
    },
    {
      nome:'Data Science',
      corPrimaria: '#A6d157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria: '#E06869',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Mobile',
      corPrimaria: '#D86EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#FFBA05',
      corSecundaria:'#FFF5D9'
    },
      {
      nome:'UX e Design',
      corPrimaria: '#FF8B29',
      corSecundaria:'#FFEEDF'
    },
  ]

  const [Colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...Colaboradores, colaborador])
  }


  return (
    <div className="App">
      <Banner></Banner>

      <Formulario times = {times} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador) } ></Formulario>
      
    
     {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
   
    </div>
  );
}

export default App;
