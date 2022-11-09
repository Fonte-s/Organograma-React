import './Time.css'
import {props} from 'react'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';


const Time = (props) => {

 return (

    (props.Colaboradores.length > 0) && 
    <section  className='time' style={{ backgroundColor: 
    hexToRgba(props.cor, '0.6') }}> 

      <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor}  type='color' className='input-cor'></input>

        <h3 style={{borderColor: props.corSecundaria }}>{props.nome}</h3> 

        <div className='colaboradores' >
         {props.Colaboradores.map( colaborador => {
         
            return <Colaborador corDeFundo={props.corSecundaria} key={colaborador.nome} nome= {colaborador.nome} cargo ={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>

         })} 
         </div>
    </section>
 )   


} 


export default Time