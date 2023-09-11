import "./style.scss";
import reactTechsIcon from "../../assets/img/react-techs-icon.svg";
import vueTechsIcon from "../../assets/img/vue-techs-icon.svg";
import nodeTechsIcon from "../../assets/img/node-techs-icon.svg";
import mongoTechsIcon from "../../assets/img/mongo-techs-icon.svg";
import postgresTechsIcon from "../../assets/img/postgres-techs-icon.svg";
import muiTechsIcon from "../../assets/img/mui-techs-icon.svg";
import sassTechsIcon from "../../assets/img/sass-techs-icon.svg";
import techsNameLine from "../../assets/img/techs-name-line.svg";
import { useRef, useState } from "react";
// import { useTranslation } from 'react-i18next'
import Translator from "../I18n/Translator";
const Techs = () => {
  //   const { t } = useTranslation();
  const techsCarouselRef = useRef<HTMLDivElement>(null);
  const [techsCarouselPosition, setTechsCarouselPosition] = useState(0);
  const techsCarousel = () => {
    if (techsCarouselRef.current) {
      const techsCarouselWidth = techsCarouselRef.current.offsetWidth;
      const techsCarouselScrollWidth = techsCarouselRef.current.scrollWidth;
  
      let newPosition;
      
      if (techsCarouselPosition < techsCarouselScrollWidth - techsCarouselWidth) {
        newPosition = techsCarouselPosition + techsCarouselWidth;
      } else {
        newPosition = 2;
      }
  
      setTechsCarouselPosition(newPosition);
  
      techsCarouselRef.current.scrollLeft = newPosition;
    }
  };
  setInterval(techsCarousel, 5000);

  return (
    <section className="techs__section-container" id="technologies">
      <h1 className="techs__section-title">
        <Translator path="technologies" />
      </h1>
      <section className="techs__section">
        <div className="techs__section-texts">
          <p className="techs__text">
            Crio interfaces dinâmicas e envolventes usando <strong>React</strong> e <strong>Vue</strong>, enquanto
            construo servidores e APIs robustas com <strong>Node</strong>, <strong>Express</strong> e <strong>Typescript</strong>. Minha
            paixão pelo design se traduz na elegância do <strong>Figma</strong>, <strong>Scss</strong> e <strong>Material
            UI</strong>.
          </p>
          <p className="techs__text">
            Além disso, domino a gestão de dados com destreza. Sou um expert em
            <strong>PostgreSQL, MySQL e MongoDB</strong>, reconhecendo que a base sólida de dados
            é essencial para o sucesso.
          </p>
          <p className="techs__text -icon">
            <span>
              Em adição, tenho domínio linguístico do <strong>Português, Inglês e
              Espanhol</strong>, caso queira, você pode clicar em “
            </span>
            <img
              src="../../assets/img/config-icon.svg"
              alt="Configuration icon"
            />
            <span>” no menu superior e alterar seu idioma.</span>
          </p>
        </div>
        <div className="techs__section-icons">
          <h3 className="tech__icons-name">
            <img src={techsNameLine} alt="" />
            React
            <img src={techsNameLine} alt="" />
          </h3>
          <div className="techs__section-icons-container" ref={techsCarouselRef}>
            <img src={sassTechsIcon} alt="" />
            <img src={reactTechsIcon} alt="" />
            <img src={vueTechsIcon} alt="" />
            <img src={nodeTechsIcon} alt="" />
            <img src={mongoTechsIcon} alt="" />
            <img src={postgresTechsIcon} alt="" />
            <img src={muiTechsIcon} alt="" />
            <img src={sassTechsIcon} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Techs;
