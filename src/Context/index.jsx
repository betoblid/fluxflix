import React, { createContext, useContext, useEffect, useState } from "react"
import banco_static from "../dados/db.json"
import axios from "axios"

//criando um context pra aplicação
const MyProvide = createContext()
//nomiando esse context
MyProvide.displayName = "MyFavoritos"

//criando um provider que deixa os dados compartilhados nos components diversos
const Providedados = ({ children }) => {

    //useEffect retornará dados para variavel de state para que fique disponivel em toda a Aplicação
    useEffect(() => {
        //condição caso não exista um localstorage salve um estatico para não dar problema na execução.
        if (JSON.parse(localStorage.getItem('filmesalvo')) !== null) {

            //busca dados na api e trazer pra nossa aplicação
            async function SalvarDadosDaAPI() {

                const res = await axios.get("https://flux-api-beta.vercel.app/movies")
                    .then((re) => localStorage.setItem("filmesalvo", JSON.stringify(re.data)))
            }
            //execulta a ação
            SalvarDadosDaAPI()
        } else {
            //salvar dados estaticos no localStorage
            function SalvarDados() {
                localStorage.setItem("filmesalvo", JSON.stringify(banco_static));
            }
            //execulta a ação
            SalvarDados();
        }
    }, []);

    //salva uma lista de objetos que será salvo ao clicar em favorito
    const [favorito, setFavorito] = useState([]);

    return (
        <MyProvide.Provider value={{
            //colocando o que será visivel para os outros components
            favorito,
            setFavorito
        }}>
            {
                children
            }
        </MyProvide.Provider>
    )
}
export default Providedados;

//hook personalizado para criar uma lista de cards que a pessoa gosto.
export const FavoritesContext = () => {
    //é uma destruturação do context para usar como hook

    const { favorito, setFavorito } = useContext(MyProvide);

    //criar uma function que adicionará no context o que foi clicado como gostei
    function addFavorito(newitem) {
        //verificar se o item não está se repetindo
        const repetidoFavorito = favorito.some((item) => item.id_filme === newitem.id_filme);

        //nova lista que recebe lista anterior, salva a lista original favorito
        let newList
        if (JSON.parse(localStorage.getItem("Favoritos")) === null) {

            newList = [...favorito]
        } else {
            newList = JSON.parse(localStorage.getItem("Favoritos"))
        }
        //verifica se ja não estava na lista se não estiver ele adiciona e não tira
        if (!repetidoFavorito) {
            //adiciona o novo intem na lista nova
            newList.push(newitem)
            //retorna a nova lista e apaga a lista antiga
            localStorage.setItem("Favoritos", JSON.stringify(newList))
            return setFavorito(newList);
        }
        //verifica se o id do intem é diferente dos que estão na lista
        newList = favorito.filter((favorit) => favorit.id_filme !== newitem.id_filme);
        localStorage.setItem("Favoritos", JSON.stringify(newList))
        //retorna a lista depois do filtro
        return setFavorito(newList)
    }
    //retorna um novo Hook da aplicação
    return {
        favorito,
        addFavorito
    }
}

export const UseProvaider = () => {

    return useContext(MyProvide)
}