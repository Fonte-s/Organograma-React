import './Time.css'
import {props} from 'react'
import Colaborador from '../Colaborador'


const Time = (props) => {

 return (

    (props.Colaboradores.length > 0) && <section  className='time'
     style={{ backgroundColor: props.corSecundaria }}> 

        <h3 style={{borderColor: props.corPrimaria }}>{props.nome}</h3> 
        <div className='colaboradores'>
         {props.Colaboradores.map( colaborador => {
         
            return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome= {colaborador.nome} cargo ={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>

         })} 
         </div>
    </section>
 )   


} 


export default Time