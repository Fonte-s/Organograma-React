import './Time.css'
import {props} from 'react'
import Colaborador from '../Colaborador'


const Time = (props) => {

 return (
    <section  className='time' style={{ backgroundColor: props.corSecundaria }}> 
        <h3 style={{borderColor: props.corPrimaria }}>{props.nome}</h3>
        <Colaborador></Colaborador>
    </section>
 )   


} 


export default Time