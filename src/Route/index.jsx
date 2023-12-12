import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home";
import Erro404 from "../Pages/404"
import Assistir from "../Pages/Assistir"
import Pesquisa from "../Pages/pesquisar"
import Perfil from "../Pages/Perfil"
import Cadastro from "../Pages/Cadastro"

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Assistir/:idfilme" element={<Assistir />} />
                <Route ext path="/pesquisar" element={<Pesquisa />} />
                <Route ext path="/perfil" element={<Perfil />} />
                <Route ext path="/cadastro" element={<Cadastro />} />
                <Route path="*" element={<Erro404 />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;