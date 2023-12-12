import style from "./Categoria.module.css";
//categorias globais para filtrar dados
export const Categorias = [
    "Anime",
    "Ação",
    "Ficção científica",
    "Drama",
    "Romance",
    "Aventura",
    "Comédia",
    "Dorama",
    "Desenho",
    "Cinema",
    "Terror"
];
//essa function filtra os dados por categoria e retorna os filmes com a mesma categoria parametro enviado é um indice 
export function filtrarcategoria(indice) {
    //salvar dados do localStorage para ser usado como filtro pros cards
    let dado = JSON.parse(localStorage.getItem("filmesalvo"))
    return dado.filter((dado) => dado.categoria === Categorias[indice])

}
export default function FunctionCategoria({ name, children }) {
    return (
        <article className={style.category}>
            <h2 title={`Categoria ${name}`}>{name}</h2>
            <div>
                {children}
            </div>
        </article>
    );
}