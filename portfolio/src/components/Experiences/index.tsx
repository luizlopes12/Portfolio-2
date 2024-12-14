import './style.scss'
// import { useTranslation } from 'react-i18next'
import divtech from '/companies-divtech.png'
import amil from '/companies-amil.png'
import brik from '/companies-brik.png'
import inspand from '/companies-inspand.png'
import vale from '/companies-vale.png'
import marykay from '/companies-marykay.png'
import natura from '/companies-natura.png'
import claro from '/companies-claro.png'
import b3 from '/companies-b3.png'
import first from '/companies-first.png'
import avon from '/companies-avon.png'
import stone from '/companies-stone.png'
import scrollarrow from '/xp-texts-scroll-arrow.svg'
import muiIcon from '/mui-bg-icon.svg'
import nodeIcon from '/node-bg-icon.svg'
import mysqlIllustration from '/mysql-bg-illustration.png'
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
          company="Stefanini"
          title="frontendDev"
          status="current"
          description="stefaniniDescription"
          />
          <ExperienceItem
          company="Trade Insights"
          title="frontendDev"
          status="06/2024 - 10/2024"
          description="tradeDescription"
          />
          <ExperienceItem
          company="Inspand"
          title="frontendDev"
          status="06/2022 - 06/2024"
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