import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header"
import ViewFilme from "../../Components/CardAssistir";
import Container from "../../Components/Container";
import { useEffect, useState } from "react";
import Load from "../../Components/Load";

const Assistir = () => {
    //hooks de controle
    const [banco, setBanco] = useState([]);
    const [rend, setrend] = useState(false)

    useEffect(() => {
        //pega uma lista de dados e salva em um hook a lista
        function dados(){

            setBanco( JSON.parse(localStorage.getItem("filmesalvo")))
        }
        //execulta
        dados()
        //após 200 milisegundos set a variavel de controle e renderize na tela o filme que o usuario ira assistir
        setTimeout(() => {
            setrend(true)
        }, 200);

    }, []);

    //pegando um parametro da url
    const { idfilme } = useParams()

    return (
        <>
            <Header />

            <Container>
                {
                    //filtrando os dados de filme e criando o cardView com os dados filtrados
                    rend ? banco.filter((dado) => dado.id_filme == idfilme).map((dado) => <ViewFilme id={dado.id_filme} key={dado.id_filme} nome={dado.nome}
                        plataforma={dado.plataforma} data={dado.categoria} /> 
                    )
                    : <Load />
                }
            </Container>


            <Footer />
        </>
    )

}
export default Assistir;