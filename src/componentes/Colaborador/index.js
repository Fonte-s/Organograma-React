import './Colaborador.css'
import {props} from 'react'

const Colaborador = ({nome,imagem,cargo, corDeFundo}) => {

    return (

        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt='props.nome'></img>
            </div>
            <div className='rodape'>
                <h4>{nome} </h4>
                <h5>{cargo}</h5>
            </div>
        </div>

    )
}


export default Colaborador