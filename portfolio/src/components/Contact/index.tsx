import './style.scss'
// import { useTranslation } from 'react-i18next'
import Translator from '../I18n/Translator'

const Contact = () => {
//   const { t } = useTranslation();

  return (
    <section className='contact__section-container' id="contact">
      <h1 className="contact__section-title">
        <Translator path="contact" />
      </h1>
    </section>
  )
}

export default Contact