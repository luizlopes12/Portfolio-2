import "./style.scss";
import reactTechsIcon from "../../assets/img/react-techs-icon.svg";
import vueTechsIcon from "../../assets/img/vue-techs-icon.svg";
import nodeTechsIcon from "../../assets/img/node-techs-icon.svg";
import mongoTechsIcon from "../../assets/img/mongo-techs-icon.svg";
import postgresTechsIcon from "../../assets/img/postgres-techs-icon.svg";
import muiTechsIcon from "../../assets/img/mui-techs-icon.svg";
import sassTechsIcon from "../../assets/img/sass-techs-icon.svg";
import techsNameLine from "../../assets/img/techs-name-line.svg";
import configIcon from "../../assets/img/config-icon.svg";
import gitBgIcon from "../../assets/img/git-bg-icon.svg";
import sassBgIcon from "../../assets/img/sass-bg-icon.svg";
import bgCheeseIllustration from "../../assets/img/bg-cheese-illustration.svg";
import postgreBgIcon from "../../assets/img/postgre-bg-icon.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { useState } from "react";
// import { useTranslation } from 'react-i18next'
import Translator from "../I18n/Translator";
const Techs = () => {
  //   const { t } = useTranslation();
  interface ITechsCarouselItem {
    name: string;
    icon: string;
  }

  const [activeSlider, setActiveSlider] = useState({
    name: "React",
    icon: reactTechsIcon,
  });


  const techsCarouselItems: ITechsCarouselItem[] = [
    {
      name: "React/Next",
      icon: reactTechsIcon,
    },
    {
      name: "Vue/Nuxt",
      icon: vueTechsIcon,
    },
    {
      name: "Node/Express",
      icon: nodeTechsIcon,
    },
    {
      name: "MongoDB",
      icon: mongoTechsIcon,
    },
    {
      name: "PostgreSQL",
      icon: postgresTechsIcon,
    },
    {
      name: "Material UI",
      icon: muiTechsIcon,
    },
    {
      name: "Sass/Scss",
      icon: sassTechsIcon,
    },
  ];

  return (
    <section className="techs__section-container" id="technologies">
      <h1 className="techs__section-title">
        <Translator path="technologies" />
      </h1>
      <section className="techs__section">
        <div className="techs__section-texts">
          <img src={postgreBgIcon} alt="Postgre" className="postgre__bg-icon"/>
          <p className="techs__text">
            <Translator path="technologiesText1Part1" />
            <strong><Translator path="react" /></strong>
            <Translator path="and" />
            <strong><Translator path="vue" /></strong>
            <Translator path="technologiesText1Part2" />
            <strong><Translator path="node" /></strong>,
            <strong><Translator path="express" /></strong>
            <Translator path="and" />
            <strong><Translator path="typescript" /></strong>
            <Translator path="technologiesText1Part3" />
            <strong><Translator path="figma" /></strong>,
            <strong><Translator path="sass" /></strong>
            <Translator path="and" />
            <strong><Translator path="materialUi" /></strong>.
          </p>
          <p className="techs__text">
            <Translator path="technologiesText2Part1" />
            <strong><Translator path="technologiesText2Databases" /></strong>
            <Translator path="technologiesText2Part2" />
          </p>
          <p className="techs__text -icon">
            <span>
              <Translator path="technologiesText3Part1" />
              <strong><Translator path="technologiesText3Languages" /></strong>
              <Translator path="technologiesText3Part2" />
            </span>
            <img
              src={configIcon}
              alt="Configuration icon"
            />
            <span>
              <Translator path="technologiesText3Part3" />
            </span>
          </p>
        </div>
        <div className="techs__section-icons">
          <img src={gitBgIcon} alt="git" className="git__bg-icon"/>
          <h3 className="tech__icons-name">
            <img src={techsNameLine} alt="" />
            <span> {activeSlider.name}  </span>              
            <img src={techsNameLine} alt="" />
          </h3>
          <div className="techs__section-icons-container">
                    <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper"
                    onSlideChange={(swiperCore) => {
                      const { realIndex } = swiperCore;
                      setActiveSlider(techsCarouselItems[realIndex])
                    }}
                  >
                  {techsCarouselItems.map((item, index) => (
                          <SwiperSlide>
                            <img src={item.icon} alt={item.name} key={index}/>
                          </SwiperSlide>
                  ))}
                  </Swiper>
                  </div>
          <img src={sassBgIcon} alt="git" className="sass__bg-icon"/>
        </div>
      </section>
      <img src={bgCheeseIllustration} alt="Cheese with wings" className="cheese__bg-illustration"/>
    </section>
  );
};

export default Techs;
