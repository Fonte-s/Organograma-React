import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {


    const times = [

        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Mobile'
    ]

    return (
        <section className="formulario">
            <form>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome:" placeholder="Digite seu Nome"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite o endereço da imagem"></CampoTexto>
                <ListaSuspensa label="Time" itens ={times}></ListaSuspensa>
            </form>
        </section>
    )

}

export default Formulario