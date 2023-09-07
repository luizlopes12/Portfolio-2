import './style.scss'
import { useTranslation } from 'react-i18next'
import Translator from '../I18n/Translator'
import heroIllustration from '../../assets/img/hero-illustration.svg'
import illustrationWorks from '../../assets/img/illustration-works.svg'
import heroMap from '../../assets/img/hero-map.svg'
import codeIcon from '../../assets/img/code-bg-icon.svg'
import vueIcon from '../../assets/img/vue-bg-icon.svg'
import reactIcon from '../../assets/img/react-bg-icon.svg'
import nodeIcon from '../../assets/img/node-bg-icon.svg'

const About = () => {
  const { t } = useTranslation();

  return (
    <section className='about__section-container' id="aboutme">
      <h1 className="about__section-title">
        <Translator path="aboutMe" />
      </h1>
      <section className="about__section">
        <figure className="about__section-illustrations">
          <img src={heroIllustration} alt={t("heroIllustration")} className='hero__illustration1' />
          <img src={illustrationWorks} alt={t("worksIllustration")} className='hero__illustration2' />
          <img src={reactIcon} className='about__react-icon1'/>
          <img src={vueIcon} className='about__vue-icon1'/>
        </figure>
        <article className="about__section-texts">
            <h2 className='about__text-title'>
                <Translator path="fullstackDeveloper" />
            </h2>
            <p className='about__text-techs'>
              <Translator path="techsFocus" />
            </p>
            <p className='about__text-aboutme'>
              <Translator path="aboutMeText" />
            </p>
            <p className='about__text-contact'>
              <img src={codeIcon} className='contact__code-icon1'/>
              <a href="#contact">
                <Translator path="contactMe" />
              </a>
              <img src={codeIcon} className='contact__code-icon2'/>
            </p>
          </article>
          <div className="about__section-location">
            <img src={heroMap} alt={t('locationMap')} />
          </div>
          <img src={reactIcon} className='about__react-icon2'/>
          <img src={nodeIcon} className='about__node-icon1'/>

      </section>
    </section>
  )
}

export default About