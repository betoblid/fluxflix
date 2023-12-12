import { Link } from "react-router-dom";
import Clas from "./Header.module.css"
import { useState } from "react";

const Header = () => {
    //Hook que recebe se o menu está visivel ou não false pra não e true pra sim
    const [menunav, setMenuNav] = useState(false)
    //function que seta o status da aplicação pra false ou não
    function setbtnMenu() { 
        return menunav === false ? setMenuNav(true) : setMenuNav(false);
    }

    return (
        <header className={Clas.container_header}>
            <figure>
                <Link to="/" title="Pagina Principal">
                    <img src="https://a.imagem.app/oHIsRb.png" alt="Logo FluxFlix" border="0" title="Logo FluxFlix" />
                </Link>
            </figure>
            <div className={Clas.menu_off}>
                {/* btn com evento que ao clicar executa a function setBtmMenu que troca o status para true ou false fazendo com que o style da aplicação mude e aparece o menu */}
                <button onClick={() => setbtnMenu()} title="menu do site">
                    
                <svg xmlns="http://www.w3.org/2000/svg" xlinkTitle="menu de navegação" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>
            {/* uma condição para aplicar style pra aplicação */}
            <nav className={menunav === false ? Clas.hidden : Clas.on}>
                <ul>
                    <li><Link to="/" title="pagina principal">Home</Link></li>
                    <li><Link to="/pesquisar" title="pagina de Pesquisa">Pesquisar</Link></li>
                    <li><Link to="/perfil" title="Perfil do Usuário">Perfil</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;