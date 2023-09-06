import './style.scss'
// import { useTranslation } from 'react-i18next'
import Translator from '../I18n/Translator'
const Projects = () => {
//   const { t } = useTranslation();

  return (
    <section className='projects__section-container' id="projects">
      <h1 className="projects__section-title">
        <Translator path="projects" />
      </h1>
    </section>
  )
}

export default Projects