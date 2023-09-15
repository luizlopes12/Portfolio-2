import './style.scss'
// import { useTranslation } from 'react-i18next'
import Translator from '../I18n/Translator'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Projects = () => {
//   const { t } = useTranslation();

  return (
    <section className='projects__section-container' id="projects">
      <h1 className="projects__section-title">
        <Translator path="projects" />
      </h1>
      <section className='projects__section'>
          <h3>
            <Translator path='comingSoon'/>
          </h3>
      </section>
    </section>
  )
}

export default Projects