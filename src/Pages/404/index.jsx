import { Link } from "react-router-dom";
import Class from "./Erro.module.css";

const Erro404 = () => {

    return (
        <section className={Class.container_erro}>
            <article>
                <h1>Erro - 404</h1>
                <p>essa pagina não existe por favor volte a pagina inicial do site</p>
                <Link to="/" title="Voltar Para Pagina Principal">Voltar</Link>
            </article>
        </section>
    )
}
export default Erro404;