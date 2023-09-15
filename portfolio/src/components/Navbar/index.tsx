import "./style.scss";
import brandLogo from "../../assets/img/brand-logo.svg";
import configIcon from "../../assets/img/config-icon.svg";
import mobileLine1 from "../../assets/img/mobile-line1.svg";
import mobileLine2 from "../../assets/img/mobile-line2.svg";
import mobileLine3 from "../../assets/img/mobile-line3.svg";
import brazilFlag from "../../assets/img/brazil-flag.svg";
import usaFlag from "../../assets/img/usa-flag.svg";
import spainFlag from "../../assets/img/spain-flag.svg";
import Translator from "../I18n/Translator";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { changeLanguage } from "i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const configsTooltipBodyRef = useRef<HTMLDivElement>(null);
  const configsTooltipContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuContainerRef = useRef<HTMLDivElement>(null);
  const navbarContainerRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleShowConfigs = () => {
    if (configsTooltipBodyRef.current && configsTooltipContainerRef.current) {
      configsTooltipBodyRef.current.classList.toggle("-active");
      configsTooltipContainerRef.current.classList.toggle("-active");
    }
  };

  const handleShowMobileMenu = () => {
    if (mobileMenuContainerRef.current && navbarContainerRef.current) {
      mobileMenuContainerRef.current.classList.toggle("-active");
      navbarContainerRef.current.classList.toggle("-active");
    }
  };

  const handleChangeLanguage = (lang: string) => {
    changeLanguage(lang);
    handleShowConfigs();
  }
  
  return (
    <section className="navbar__section-container" ref={navbarRef}>
      <section className="navbar__section">
        <a href="#aboutme">
            <figure className="brandlogo__figure">
            <img
                src={brandLogo}
                alt="Logo 'Luiz Lopes'"
                title={t("logoWelcomeTitle")}
            />
            </figure>
        </a>
        <div className="mobile__menu-container" ref={mobileMenuContainerRef} onClick={handleShowMobileMenu}>
          <img src={mobileLine1} className="mobile__menu-line1" />
          <img src={mobileLine2} className="mobile__menu-line2" />
          <img src={mobileLine3} className="mobile__menu-line3" />
        </div>
        <nav className="navbar__container" ref={navbarContainerRef}>
          <div className="configs__tooltip-container" ref={configsTooltipContainerRef}>
            <div
              className="configs__tooltip-header"
              onClick={handleShowConfigs}
            >
              <figure className="configs__tooltip-icon">
                <img src={configIcon} alt={t("settings")} />
              </figure>
              <div className="configs__tooltip-text">
                <Translator path="idioms" />
              </div>
            </div>
            <div
              className="configs__tooltip-body"
              ref={configsTooltipBodyRef}
            >
              <div className="config__idiom-option" onClick={() => handleChangeLanguage('pt')}>
                <Translator path="portuguese" />
                <img src={brazilFlag} alt={t("portuguese")} />
              </div>
              <div className="config__idiom-option" onClick={() => handleChangeLanguage('en')}>
                <Translator path="english" />
                <img src={usaFlag} alt={t("english")} />
              </div>
              <div className="config__idiom-option" onClick={() => handleChangeLanguage('es')}>
                <Translator path="spanish" />
                <img src={spainFlag} alt={t("spanish")} />
              </div>
            </div>
          </div>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#aboutme" onClick={handleShowMobileMenu}>
                <Translator path="aboutMe" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#technologies" onClick={handleShowMobileMenu}>
                <Translator path="technologies" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#experiences" onClick={handleShowMobileMenu}>
                <Translator path="experiences" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#projects" onClick={handleShowMobileMenu}>
                <Translator path="projects" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#contact" onClick={handleShowMobileMenu}>
                <Translator path="contact" />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
};

export default Navbar;
