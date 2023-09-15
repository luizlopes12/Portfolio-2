import './style.scss'
import gitlabIcon from '../../assets/img/footer-gitlab-icon.svg'

const Footer = () =>{
    return(
        <footer className='footer__section-container'>
            <section className="footer__section">
                <img src={gitlabIcon} alt="Gitlab" className='gitlab__footer-icon'/>
            </section>
        </footer>
    );
}

export default Footer