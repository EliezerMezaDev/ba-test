import React, { useContext } from "react";

//? translations
import { useTranslation } from "@hooks/useTranslation";

//? images & styles
import Logo from "@images/buenaventura-tax-logo.svg";

import "./header.scss";

const Header = () => {
  const t = useTranslation();

  const scrollTo = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <header className="header">
      <div className="container-main">
        <div className="header__logo">
          <a onClick={() => scrollTo("sec-welcome")}>
            <img src={Logo} alt="Buenaventura.tax logo" />
          </a>
        </div>
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__item">
              <button
                className="header__button"
                id="Nos"
                onClick={() => {
                  scrollTo("sec-about");
                }}
              >
                {t("static.nav.buttonA")}
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__button"
                id="Esp"
                onClick={() => {
                  scrollTo("sec-services");
                }}
              >
                {t("static.nav.buttonB")}
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__button"
                id="Ser"
                onClick={() => {
                  scrollTo("sec-additionals");
                }}
              >
                {t("static.nav.buttonC")}
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__button"
                id="Con"
                onClick={() => {
                  scrollTo("sec-contact");
                }}
              >
                {t("static.nav.buttonD")}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
