import axios from "axios";
import { useState } from "react";
import style from "./Cadastro.module.css";
import { Categorias } from "../../Components/Categoria";
export default function Cadastro() {
    //hooks que salva os unputs
    const [id_filme, setId_filme] = useState("")
    const [nome, setNome] = useState("")
    const [plataforma, setplataforma] = useState("")
    const [categoria, setcategoria] = useState("")

    //a cada chamado de click envia um requisição com body para api para que ela cadastre os filmes no site
    async function salvarNovoFilme() {

        if (nome.length > 3 && id_filme.length == 11 && plataforma.length > 4) {
            await axios.post("https://flux-api-beta.vercel.app/?key=ASGrfSDFDetrg233466767SDDF",
                {
                    nome: nome,
                    id: id_filme,
                    plataforma: plataforma,
                    categoria: categoria
                })
                .then(res => alert("salvo Com Sucesso"))
                .catch((err) => console.log(err))

            setId_filme("")
            setNome("")
            setcategoria("")
            setplataforma("")
        } else {
            alert("Verifique os campos e certifique-se que os campos estão preenchidos corretamente.")
        }

    }
    function validarCategoria(validar) {
        if (Categorias.indexOf(validar) === -1) {
            alert("Digite uma das 5 categorias que existe no site e ofilme pertence")
            return true
        }
    }
    return (
        <div className={style.container_cadastro}>
            <h1>Cadastro de Filme</h1>
            <div className={style.card_input}>
                <label htmlFor="txidfilme">ID:</label>

                <input
                    type="text"
                    title="Digite o id do filme"
                    onChange={(e) => setId_filme(e.target.value)}
                    value={id_filme}
                    placeholder="digite o id do filme"
                    id="txidfilme"
                    required />

                <label htmlFor="txnomefilme">Nome:</label>

                <input
                    type="text"
                    title="Digite o nome do filme"
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                    placeholder="digite o nome do filme"
                    id="txnomefilme"
                    required />

                <label htmlFor="txplataforma">Plataforma:</label>

                <input
                    type="text"
                    title="Digite plataformas que o filme está"
                    onChange={(e) => setplataforma(e.target.value)}
                    value={plataforma}
                    placeholder="digite a plataforma"
                    id="txplataforma"
                    required />

                <label htmlFor="txcategoria">Categoria:</label>

                <input
                    type="text"
                    title="Digite categoria q qual pertence"
                    onChange={(e) => setcategoria(e.target.value)}
                    onBlur={(e) => validarCategoria(e.target.value)}
                    value={categoria}
                    placeholder="digite a categoria"
                    id="txcategoria"
                    required />

            </div>
            <button type="submit" onClick={() => salvarNovoFilme(id_filme, nome, plataforma)} title="Salvar dados digitados">Enviar salvar</button>
        </div>
    )
}