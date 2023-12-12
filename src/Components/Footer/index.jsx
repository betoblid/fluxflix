import style from "./Footer.module.css"

const Footer = () => {

    return(
        <footer className={style.Footer}>
            <p>&copy; - direitos autorais a fluxflix Desenvolvido por <span title="nome do criador">'Herbert souza'</span></p>
        </footer>
    )
}
export default Footer;