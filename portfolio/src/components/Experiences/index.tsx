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
      <section className='experiences__section'>
            <div className="companies__images-list">
              <div className="companies__images-item">1</div>
              <div className="companies__images-item">2</div>
              <div className="companies__images-item">3</div>
              <div className="companies__images-item">4</div>
              <div className="companies__images-item">5</div>
              <div className="companies__images-item">6</div>
              <div className="companies__images-item">7</div>
              <div className="companies__images-item">8</div>
              <div className="companies__images-item">9</div>
              <div className="companies__images-item">10</div>
              <div className="companies__images-item">11</div>
              <div className="companies__images-item">12</div>
          </div>
      </section>
    </section>
  )
}

export default Experiences