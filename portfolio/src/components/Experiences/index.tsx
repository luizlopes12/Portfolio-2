import './style.scss'
// import { useTranslation } from 'react-i18next'
import Translator from '../I18n/Translator'

const Experiences = () => {
//   const { t } = useTranslation();

  return (
    <section className='experiences__section-container' id="experiences">      
      <h1 className="experinces__section-title">
        <Translator path="experiences" />
      </h1>
    </section>
  )
}

export default Experiences