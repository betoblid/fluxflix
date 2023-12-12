import Clas from './Banner.module.css'

const Banner = () => {
    return (
        <section className={Clas.sessao_banner} >
            {/* primeiro card */}
            <article className={Clas.container_banner}>
                <div className={Clas.box_img}>
                    <img src="https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png" alt="capa do filme Projeto Adam" title='capa do filme Projeto Adam' />
                    <div className={Clas.box_trailer}>
                        <iframe src="https://www.youtube.com/embed/ykNjdamiXis?si=81CUYk_InCJThl4l" title="trailer do filme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className={Clas.box_text}>
                        <h1>O projeto ADAM</h1>
                        <p>Depois de viajar no tempo e ir parar em 2022 sem querer, o piloto de combate Adam Reed se une à sua versão de 12 anos de idade para salvar o futuro.</p>
                    </div>
                    <div className={Clas.box_card}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-badge-hd-fill" viewBox="0 0 16 16"  xlinkTitle="qualidade do filme">
                            <path d="M10.53 5.968h-.843v4.06h.843c1.117 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04z" />
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm5.396 3.001V11H6.209V8.43H3.687V11H2.5V5.001h1.187v2.44h2.522V5h1.187zM8.5 11V5.001h2.188c1.824 0 2.685 1.09 2.685 2.984C13.373 9.893 12.5 11 10.69 11H8.5z"/>
                        </svg>
                    </div>
                </div>
            </article>
        </section>

    )
}

export default Banner;