import { useEffect, useState } from "react";
import style from "./Search.module.css"
//import banco from "../../dados/db.json"
import ListCard from "../Listcard";

//function que filtrará os dados e trazerá os dados nessesario para construir um card.
//parametros o search e os dado original
function filtro(txtsearch, dados) {
    return dados.filter((dado) => dado.nome.toLocaleLowerCase().includes(txtsearch.toLocaleLowerCase()))
}

const Search = () => {

    useEffect(() => {
        //pega os dados do local storage e salva na lista para que a pesquisa seja feita com base nessa lista
        setList(JSON.parse(localStorage.getItem("filmesalvo")))
    },[])

    //será salvo os dados do input que o usuario digitar
    const [search, setSearch] = useState("")
    const [list, setList] = useState([])
    //a function criada como filtro será chamada e o retorno dela será salvo em uma constante para que possa ser usada.
    const filtrado = filtro(search, list)
    const Nfilme = filtrado.length
    const subtitle = Nfilme > 0 ? `Foi encontrado ${Nfilme} filmes` : `Não a filmes com "${search}"`;
    return (
        <>
            <div className={style.container_search}>
                <h2>Pesquisar</h2>
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    title="Digite sua pesquisa de filme ou serie"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    maxLength="40"
                />
            </div>
            {/*os dados que foi filtrado e salvo em uma constante será enviado para lista de cards e la esses dados será construido os card */}
            <ListCard banco={filtrado} heading={subtitle} />
        </>

    )
}


export default Search;