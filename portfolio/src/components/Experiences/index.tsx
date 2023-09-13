import './style.scss'
// import { useTranslation } from 'react-i18next'
import divtech from '../../assets/img/companies-divtech.png'
import amil from '../../assets/img/companies-amil.png'
import brik from '../../assets/img/companies-brik.png'
import inspand from '../../assets/img/companies-inspand.png'
import vale from '../../assets/img/companies-vale.png'
import marykay from '../../assets/img/companies-marykay.png'
import natura from '../../assets/img/companies-natura.png'
import claro from '../../assets/img/companies-claro.png'
import b3 from '../../assets/img/companies-b3.png'
import first from '../../assets/img/companies-first.png'
import avon from '../../assets/img/companies-avon.png'
import stone from '../../assets/img/companies-stone.png'
import scrollarrow from '../../assets/img/xp-texts-scroll-arrow.svg'
import muiIcon from '../../assets/img/mui-bg-icon.svg'
import nodeIcon from '../../assets/img/node-bg-icon.svg'
import mysqlIllustration from '../../assets/img/mysql-bg-illustration.png'
import ExperienceItem from '../ExperienceItem'

import Translator from '../I18n/Translator'

const Experiences = () => {
//   const { t } = useTranslation();

  return (
    <section className='experiences__section-container' id="experiences">      
      <h1 className="experinces__section-title">
        <Translator path="experiences" />
      </h1>
      <section className='experiences__section'>
        <img src={nodeIcon} alt="Material UI" className='node__bg-icon'/>
        <img src={muiIcon} alt="Material UI" className='mui__bg-icon'/>
        <div className="experiences__section-texts">
        <img src={scrollarrow} alt="scroll" className='scroll__arrow -up'/>
          <ExperienceItem
          company="Inspand"
          title="frontendDev"
          status="current"
          description="inspandDescription"
          />
          <ExperienceItem
          company="BRIK"
          title="fullstackDev"
          status="freelancer"
          description="brikDescription"
          />
          <ExperienceItem
          company="Fatec Registro"
          title="fullstackDev"
          status="freelancer"
          description="fatecDescription"
          />
          <ExperienceItem
          company="Dominus"
          title="uiDesigner"
          status="freelancer"
          description="dominusDescription"
          />
          <ExperienceItem
          company="Divtech"
          title="fullstackDev"
          status="divtechStatus"
          description="divtechDescription"
          />
          <ExperienceItem
          company="Digital Point"
          title="intern"
          status="digitalpointStatus"
          description="digitalpointDescription"
          />
        <img src={scrollarrow} alt="scroll" className='scroll__arrow -down'/>
        </div>
            <div className="companies__images-list">
              <div className="companies__images-item">
                  <img src={claro} alt="Claro" />
              </div>
              <div className="companies__images-item">
                  <img src={amil} alt="Amil" />
              </div>
              <div className="companies__images-item">
                  <img src={natura} alt="Natura" />
              </div>
              <div className="companies__images-item">
                  <img src={b3} alt="B3" />
              </div>
              <div className="companies__images-item">
                  <img src={avon} alt="Avon" />
              </div>
              <div className="companies__images-item">
                  <img src={stone} alt="Stone" />
              </div>
              <div className="companies__images-item">
                  <img src={first} alt="F1rst" />
              </div>
              <div className="companies__images-item">
                  <img src={marykay} alt="MaryKay" />
              </div>
              <div className="companies__images-item">
                  <img src={vale} alt="Vale" />
              </div>
              <div className="companies__images-item">
                  <img src={brik} alt="Brik" />
              </div>
              <div className="companies__images-item">
                  <img src={inspand} alt="Inspand" />
              </div>
              <div className="companies__images-item">
                  <img src={divtech} alt="Divtech" />
              </div>
          </div>
      </section>
      <img src={mysqlIllustration} alt="Material UI" className='mysql__bg-illustration'/>

    </section>
  )
}

export default Experiences