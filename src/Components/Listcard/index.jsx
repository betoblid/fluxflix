import CardFilme from "../Card_Filmes";
import style from './Filmes.module.css'

const ListCard = ({banco, heading}) => {
    return(
        <section>
            <article className={style.hending}>
                <h2>{heading}</h2>
            </article>
            {
                //os dados recebido do component Search, será passado para os cards com o method map e criará os cards.
                banco.map((dado) => <CardFilme id_filme={dado.id_filme} key={dado.id}/>)
            }
            
        </section>
    )
}

export default ListCard;