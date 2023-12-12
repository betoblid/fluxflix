
import React from "react";
import style from "./CardFilme.module.css"
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../Context";

export default function CardFilme({ id_filme, nome }) {

    //hook feito com useContext para adicionar como favorio pegando o id do projeto e guardando.
    const { favorito, addFavorito } = FavoritesContext()
    /*essa function valida se tem algo no localsotrang se tiver pegar esse object se não tiver filtrar a lista e verificar se o usuario curtiu algo pelo Hook feito com useContext*/
    function verificarsefav() {
        if (JSON.parse(localStorage.getItem("Favoritos")) === null) {
            return favorito.some((fav) => fav.id_filme === id_filme)
        } else {
            return JSON.parse(localStorage.getItem("Favoritos")).some((fav) => fav.id_filme === id_filme)
        }
    }

    return (

        <section className={style.card}>
            <Link to={`/Assistir/${id_filme}`} title="Assistir o Trailer">
                <img src={`https://img.youtube.com/vi/${id_filme}/mqdefault.jpg`} title={nome} alt={nome} className={style.capa}/>
            </Link>
            <button className={style.icon} onClick={() => addFavorito({ id_filme })} title="Botão Favorito">
                    {
                        verificarsefav() ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16" xlinkTitle="favorito">
                            <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"  />
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" xlinkTitle="unfavorito">
                                <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"  />
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                            </svg>
                    }
                </button>
        </section>
    );
}

