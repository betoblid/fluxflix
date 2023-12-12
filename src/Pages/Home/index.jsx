import React, { useEffect, useState } from "react";
import CardFilme from "../../Components/Card_Filmes";
import Carroucel from "../../Components/Carrosel";
import FunctionCategoria, { Categorias, filtrarcategoria } from "../../Components/Categoria";
import Container from "../../Components/Container";
import Load from "../../Components/Load";
import { useQuery } from "react-query";
import { FetchApi } from "../../Api/api.tsx";
import { UseProvaider } from "../../Context/index.jsx";
import Header from "../../Components/Header/index.jsx";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner/index.jsx";

const Home = () => {

  //variavel de controle de erros
  const [a, seta] = useState([])

  const { data, status } = useQuery("movie", () => FetchApi().then(res => seta(res)))
  return (
    <>
    <Header />
    <Banner />
      <Container>

        {
          status === "success" && Categorias.map((itens, index) =>

            <FunctionCategoria name={itens}>
              <Carroucel>
                {
                  filtrarcategoria(index).map((dados) => <CardFilme id_filme={dados.id_filme} key={dados.id_filme} nome={dados.nome} />)
                }
              </Carroucel>
            </FunctionCategoria>

          )


        }
        {
          status === "loading" && <Load />}

        {
          status === 'error' && <Load />
        }

      </Container>

        <Footer />
    </>
  )
}
export default Home;
