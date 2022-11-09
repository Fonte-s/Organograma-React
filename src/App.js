import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import {useState} from 'react';
import Time from './componentes/Time';
import {props} from 'react';

function App() {


  
  const [times, setTimes]  = useState([
    {


    nome:'Programação',
    cor:'#D9F7E9'
    },
    {
      nome:'Front-end',
    cor:'#E8F8F'
    },
    {
      nome:'Data Science',
    cor:'#F0F8E2'
    },
    {
      nome:'Devops',
      cor:'#FDE7E8'
    },
    {
      nome:'Mobile',
      cor:'#FAE9F5'
    },
    {
      nome:'Inovação e Gestão',
      cor: '#FFBA05',
   
    },
      {
      nome:'UX e Design',
      cor: '#FF8B29',
    
    },
  ])

  const [Colaboradores, setColaboradores] = useState ([])


  function mudarCorDoTime(cor, nome){
    setTimes(times.map( time =>{
      if(time.nome === nome ){
          console.log('mudando de cor')
          console.log(cor)
          console.log(nome)
        time.cor = cor;
      }
      console.log(time.cor)
      return time
    }
    ))
  }

  function deletarColaborador(){
    console.log('deletando colaborador')
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
