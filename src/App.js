import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import {useState} from 'react';
import Time from './componentes/Time';
import {props} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {


  
  const [times, setTimes]  = useState([
    {
      id:uuidv4(),
    nome:'Programação',
    cor:'#D9F7E9'
    },
    {
      id:uuidv4(),
      nome:'Front-end',
    cor:'#E8F8F'
    },
    {
      id:uuidv4(),
      nome:'Data Science',
    cor:'#F0F8E2'
    },
    {
      id:uuidv4(),
      nome:'Devops',
      cor:'#FDE7E8'
    },
    {
      id:uuidv4(),
      nome:'Mobile',
      cor:'#FAE9F5'
    },
    {
      id:uuidv4(),
      nome:'Inovação e Gestão',
      cor: '#FFBA05',
   
    },
      {
        id:uuidv4(),
      nome:'UX e Design',
      cor: '#FF8B29',
    
    },
  ])

  const [Colaboradores, setColaboradores] = useState ([])


  function mudarCorDoTime(cor, id){
    setTimes(times.map( time =>{
      if(time.id === id ){
     
        time.cor = cor;
      }
      
      return time
    }
    ))
  }

  function deletarColaborador(id){
    setColaboradores(Colaboradores.filter(colaborador => colaborador.id !== id));
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {

    
    setColaboradores([...Colaboradores, colaborador])
  }


  return (
    <div className="App">
      <Banner></Banner>

      <Formulario times = {times} aoColaboradorCadastro={colaborador => aoNovoColaboradorAdicionado(colaborador) } ></Formulario>
      
    
     {times.map(time =>
     <Time 
     key={time.nome}
     mudarCor={mudarCorDoTime} 
     nome={time.nome}
    cor={time.cor}
    corSecundaria={time.cor} 
    Colaboradores={Colaboradores.filter(colaborador => colaborador.time == time.nome)}
    aoDeletar={deletarColaborador}
    />
    )}
   
    </div>
  );
}

export default App;
