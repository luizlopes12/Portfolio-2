import "./style.scss";
import brandLogo from "../../assets/img/brand-logo.svg";
import configIcon from "../../assets/img/config-icon.svg";
import Translator from "../I18n/Translator";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

const Navbar = () => {
  const { t } = useTranslation();

  const configsTooltipBody = useRef<HTMLDivElement>(null);
  const configsTooltipContainer = useRef<HTMLDivElement>(null);

  const handleShowConfigs = () => {
    if (configsTooltipBody.current && configsTooltipContainer.current) {
      configsTooltipBody.current.classList.toggle("-active");
      configsTooltipContainer.current.classList.toggle("-active");
    }
  };

  return (
    <section className="navbar__container">
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
        <nav className="navbar__container">
          <div className="configs__tooltip-container" ref={configsTooltipContainer}>
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
              ref={configsTooltipBody}
            ></div>
          </div>
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#aboutme">
                <Translator path="aboutMe" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#techlologies">
                <Translator path="technologies" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#experiences">
                <Translator path="experiences" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#projects">
                <Translator path="projects" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#contact">
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
