import './style.scss'
import { useTranslation } from 'react-i18next'
import Translator from '../I18n/Translator'
import heroIllustration from '/hero-illustration.svg'
import illustrationWorks from '/illustration-works.svg'
import heroMap from '/hero-map.svg'
import codeIcon from '/code-bg-icon.svg'
import vueIcon from '/vue-bg-icon.svg'
import reactIcon from '/react-bg-icon.svg'
import nodeIcon from '/node-bg-icon.svg'
import icon2024 from '/2024-icon.svg'

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
            <p className='about__text1'>
              <Translator path="workingRemotely" />
            </p>
            <img src={heroMap} alt={t('locationMap')} />
            <p className='about__tex2'>
              <Translator path="spBrazil" />
            </p>
          </div>
          <img src={reactIcon} className='about__react-icon2'/>
          <img src={nodeIcon} className='about__node-icon1'/>

      </section>
      <img src={icon2024} className='year__icon'/>
    </section>
  )
}

export default About