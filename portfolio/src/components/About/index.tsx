import './style.scss'
// import { useTranslation } from 'react-i18next'
import Translator from '../I18n/Translator'

const About = () => {
  // const { t } = useTranslation();

  return (
    <section className='about__section-container' id="aboutme">
      <h1 className="about__section-title">
        <Translator path="aboutMe" />
      </h1>
    </section>
  )
}

export default About