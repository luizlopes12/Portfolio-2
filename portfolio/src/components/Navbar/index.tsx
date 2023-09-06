import "./style.scss";
import brandLogo from "../../assets/img/brand-logo.svg";
import configIcon from "../../assets/img/config-icon.svg";
import mobileLine1 from "../../assets/img/mobile-line1.svg";
import mobileLine2 from "../../assets/img/mobile-line2.svg";
import mobileLine3 from "../../assets/img/mobile-line3.svg";
import Translator from "../I18n/Translator";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const Navbar = () => {
  const { t } = useTranslation();

  const configsTooltipBodyRef = useRef<HTMLDivElement>(null);
  const configsTooltipContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuContainerRef = useRef<HTMLDivElement>(null);
  const navbarContainerRef = useRef<HTMLDivElement>(null);
  // const [userTheme, setUserTheme] = useState<"light" | "dark">("light");
  // const [userLanguage, setUserLanguage] = useState<"pt" | "en" | "es">("pt");

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

  return (
    <section className="navbar__section-container">
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
                <Translator path="settings" />
              </div>
            </div>
            <div
              className="configs__tooltip-body"
              ref={configsTooltipBodyRef}
            ></div>
          </div>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#aboutme" onClick={handleShowMobileMenu}>
                <Translator path="aboutMe" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#techlologies" onClick={handleShowMobileMenu}>
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
