import './style.scss'
import Translator from '../I18n/Translator'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  let projectsList = [
    {
      title: 'Learnify',
      description: 'learnifyDesc',
      desktopImage: '/projects-images/learnify-1.png',
      mobileImage: '/projects-images/learnify-2.png',
      githubLink: 'https://github.com/RianYuri/Learnify',
      siteLink: 'https://golearnify.vercel.app/'
    },
    {
      title: 'Oberon',
      description: 'oberonDesc',
      desktopImage: '/projects-images/oberon-1.png',
      mobileImage: '/projects-images/oberon-2.png',
      githubLink: 'https://github.com/luizlopes12/Oberon',
      siteLink: 'https://oberoon.vercel.app/'
    },
    {
      title: 'Enver',
      description: 'enverDesc',
      desktopImage: '/projects-images/enver-1.png',
      mobileImage: '/projects-images/enver-2.png',
      githubLink: 'https://github.com/luizlopes12/Enver',
      siteLink: 'https://goenver.vercel.app/'
    },
    {
      title: 'Fellas',
      description: 'fellasDesc',
      desktopImage: '/projects-images/fellas-1.png',
      mobileImage: '/projects-images/fellas-2.png',
      githubLink: 'https://github.com/luizlopes12/Fellas',
      siteLink: 'https://gofellas.vercel.app/'
    },
    {
      title: 'SelfCare',
      description: 'selfcareDesc',
      desktopImage: '/projects-images/selfcare-1.png',
      mobileImage: '/projects-images/selfcare-2.png',
      githubLink: 'https://github.com/luizlopes12/SelfCare',
      siteLink: 'https://luizlopes12.github.io/SelfCare/'
    },
    {
      title: 'Fylo',
      description: 'fyloDesc',
      desktopImage: '/projects-images/fylo-1.png',
      mobileImage: '/projects-images/fylo-2.png',
      githubLink: 'https://github.com/luizlopes12/Fylo',
      siteLink: 'https://luizlopes12.github.io/Fylo/'
    },
    {
      title: 'LetMeAsk',
      description: 'letmeaskDesc',
      desktopImage: '/projects-images/letmeask-1.png',
      mobileImage: '/projects-images/letmeask-2.png',
      githubLink: 'https://github.com/luizlopes12/LetMeAsk',
      siteLink: 'https://letmeask-14c72.web.app/'
    },
    {
      title: 'BeTheHero',
      description: 'betheheroDesc',
      desktopImage: '/projects-images/bethehero-1.png',
      mobileImage: '/projects-images/bethehero-2.png',
      githubLink: 'https://github.com/luizlopes12/BeTheHero',
      siteLink: 'https://bethehero24.web.app/'
    }
  ]

  return (
    <section className='projects__section-container' id="projects">
      <h1 className="projects__section-title">
        <Translator path="projects" />
      </h1>
      <section className='projects__section'>
      <Swiper
        grabCursor={true}
        breakpoints={{
          1080: {
            slidesPerGroup: 1,
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerGroup: 1,
            slidesPerView: 2,
            spaceBetween: 30
          },
          600: {
            slidesPerGroup: 1,
            slidesPerView: 2,
            spaceBetween: 30
          },
          480: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 10
          },
          240: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 10
          }
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        navigation={true}
        className="mySwiper projects__carousel"
      >
        {
          projectsList.map((project, index) =>(
            <SwiperSlide key={index}>
                <ProjectCard project={project}/>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
      </section>
    </section>
  )
}

export default Projects