import { useEffect, useState } from "react"
import Container from "../../Components/Container"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import ListCard from "../../Components/Listcard"
import { FavoritesContext } from "../../Context/index";
import style from "./Perfil.module.css"

const Perfil = () => {
    //esses dois Hooks fica responsavel por passar uma lista de filmes que o usuario curtiu e umacondição determina qual Hook usar
    const [favorit, setFavorito] = useState([])
    const { favorito } = FavoritesContext()
    //esse useeffect fica responsavel por escolher qual Hook usar. se localstorang for ingual a null então usa o hook do useContext e se tiver use os dados do localstorang.. passando assim para o hook favorit 
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("Favoritos")) === null) {

            setFavorito(favorito)
        } else {
            setFavorito(JSON.parse(localStorage.getItem("Favoritos")))
        }
    }, [])

    const NfilmeList = favorit.length;
    const heading = NfilmeList > 0 ? `Sua lista possui ${NfilmeList} filmes` : "Sua lista não possui filmes" ;
    return (
        <>
            <Header />
            <Container>
                <div className={`${style.container_perfil}`}>
                    <h1>Lista de filmes curtidos</h1>
                    <h2 title="Quantidade de Filmes e Series">{heading}</h2>
                    {
                        //aqui o component card renderiza todos os dados da lista de favorit 
                        <ListCard banco={favorit} />
                    }
                </div>

            </Container>
            <Footer />
        </>
    )
}

export default Perfil;