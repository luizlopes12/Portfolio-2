import './style.scss'
import brandLogo from '../../assets/img/brand-logo.svg'
import Translator from '../I18n/Translator'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation()
  return (
    <section className='navbar__section'>
        <figure className="brandlogo__figure">
            <img src={brandLogo} alt="Logo 'Luiz Lopes'" title={t('logoWelcomeTitle')}/>
        </figure>
        <nav className='navbar__container'>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Translator path='aboutMe'/>
                </li>
                <li className="navbar__item">
                    <Translator path='technologies'/>
                </li>
                <li className="navbar__item">
                    <Translator path='experiences'/>
                </li>
                <li className="navbar__item">
                    <Translator path='projects'/>
                </li>
                <li className="navbar__item">
                    <Translator path='contact'/>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Navbar