import React from "react"
import style from "./CardAssisitr.module.css"
import { Link } from "react-router-dom"

const ViewFilme = ({ id, nome, data, plataforma }) => {

    return (
        <section className={style.sectiontrailler}>
            <div className={style.container_ViewFilme}>
                {/*cade com o genero do filme */}
                <div className={style.filmeGenero}>
                    <div>
                        <h2>{nome}</h2>
                    </div>
                    <div className={style.box_capaFilme}>
                        <figure>
                            <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt={`capa de ${nome}`} title={nome}/>
                        </figure>
                    </div>
                    <div>
                        <p>genero: {data}</p>
                        <p>Plataformas: {plataforma}</p>
                    </div>
                    <div className={style.boxLinkVoltar}>
                        <Link to="/">Voltar</Link>
                    </div>
                </div>

                {/* card com informações do filme */}
                <div className={style.boxViewtrailler}>
                    <div>
                        <h2>Informação do filme {nome}</h2>
                    </div>
                    <div className={style.boxtrailler}>
                        <div>
                        <iframe src={`https://www.youtube.com/embed/${id}?si=lf-Xrgtrj3cph3TB&amp;controls=0`} title={`trailer ${nome}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ViewFilme;