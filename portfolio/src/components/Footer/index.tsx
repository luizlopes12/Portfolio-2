import './style.scss'
import gitlabIcon from '../../assets/img/footer-gitlab-icon.svg'
import Translator from '../I18n/Translator';
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github-icon.svg'
import twitter from '../../assets/img/twitter.svg'
import socialsDivider from '../../assets/img/socials-divider.svg'
import brandLogoWhite from '../../assets/img/brand-logo-white.svg'
import sqlIllustration from '../../assets/img/sql-footer-illustration.png'
import nodeIcon from '../../assets/img/node-footer-icon.svg'

const Footer = () =>{
    return(
        <footer className='footer__section-container'>
            <section className="footer__section">
                <img src={gitlabIcon} alt="Gitlab" className='gitlab__footer-icon'/>
                <div className="footer__section-info">
                        <img src={nodeIcon} alt="Node" className='node__footer-icon'/>
                    <div className="footer__socials">
                        <p className='footer__socials-text'><Translator path='socials'/></p>
                        <div className="footer__socials-icons">
                            <a href="https://www.instagram.com/confuzzo/" target='_blank'>
                                <img src={instagram} alt="Instagram" />
                            </a>
                            <img src={socialsDivider} alt="" />
                            <a href="https://twitter.com/Luizlopes24" target='_blank'>
                                <img src={twitter} alt="Twitter" />
                            </a>
                            <img src={socialsDivider} alt="" />
                            <a href="https://github.com/luizlopes12" target='_blank'>
                                <img src={github} alt="Github" />
                            </a>
                            <img src={socialsDivider} alt="" />
                            <a href="https://www.linkedin.com/in/luizlopes12/" target='_blank'>
                                <img src={linkedin} alt="Linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className="footer_brand">
                        <img src={brandLogoWhite} alt="Luiz Lopes" />
                        <p className='footer__brand-text'>

                            <Translator path='footerBrandText'/>

                        </p>
                    </div>
                </div>
                <div className="footer__credits">
                    <p className='footer__credits-text'>
                            <img src={github} alt="Github" className='github__credits-icon1' />
                            <img src={linkedin} alt="Linkedin" className='github__credits-icon2' />

                        <Translator path='footerCredits'/>

                            <img src={github} alt="Github" className='github__credits-icon3' />
                            <img src={linkedin} alt="Linkedin" className='github__credits-icon4' />

                    </p>
                </div>
                <img src={sqlIllustration} alt="SQL" className='sql__footer-icon'/>
            </section>
        </footer>
    );
}

export default Footer