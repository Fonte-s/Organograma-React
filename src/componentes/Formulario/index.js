import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao/index'
import {useState} from 'react'




const Formulario = () => {


    const times = [

        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Mobile'
    ]

    const [nome, setNome] = useState(' ')
    const [cargo, setCargo] = useState(' ')
    const [imagem, setImagem] = useState(' ')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido =', nome,cargo, imagem)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                 obrigatorio={true}
                  label="Nome:"
                  placeholder="Digite seu Nome"
                  valor={nome}
                  aoAlterado={valor => setNome(valor)}
                ></CampoTexto>
                <CampoTexto 
                obrigatorio={true}
                label="Cargo"
                placeholder="Digite seu Cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}  
                  >

                  </CampoTexto>
                <CampoTexto
                 obrigatorio={true} 
                 label="Cargo"
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                  aoAlterado={valor => setImagem(valor)}
                  ></CampoTexto>
                <ListaSuspensa obrigatorio={true} label="Time" itens ={times}></ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario