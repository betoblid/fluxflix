import Slider from 'react-slick'
import "./Carrosel.css"

export default function Carroucel({ children }) {

  //configuração do Slider
  const settings = {
    dots: true,
    infinite: true, //sera infinito os cads
    speed: 100, //delay para passar pro outro lado
    variableWidth: true, //se width sera responsivo
    variableHeight: true, //se height sera responsivo
    slidesToShow: window.innerWidth < 781 ? 2 : 4, //quantos slides que exibir por tela
    slidesToScroll:  window.innerWidth < 1000 ? 1 : 4  //quantos slides quer scrollar quando aperta o botao
  }
  return (
    <>
      <Slider {...settings}>
        {children}
      </Slider>
    </>
  );
}
