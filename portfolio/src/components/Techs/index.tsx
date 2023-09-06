import './style.scss'
// import { useTranslation } from 'react-i18next'
import Translator from '../I18n/Translator'
const Techs = () => {
//   const { t } = useTranslation();
  return (
    <section className='techs__section-container' id="technologies">
      <h1 className="techs__section-title">
        <Translator path="technologies" />
      </h1>
    </section>
  )
}

export default Techs