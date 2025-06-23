import React, { useContext } from "react";

//? translations
import { useTranslation } from "@hooks/useTranslation";

//? images & styles
import Logo from "@images/buenaventura-tax-logo.svg";

import "./header.scss";

const Header = () => {
  const t = useTranslation();

  const scrollTo = () => {
    console.log("Scroll function called");
  };

  return (
    <header className="header">
      <div className="container-main">
        <div className="header__logo">
          <a onClick={() => scrollTo()} href="/">
            <img src={Logo} alt="Buenaventura.tax logo" />
          </a>
        </div>
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__item">
              <button
                className="header__button"
                id="Nos"
                onClick={(e) => {
                  scrollTo();
                }}
              >
                {t("static.nav.buttonA")}
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__button"
                id="Esp"
                onClick={(e) => {
                  scrollTo();
                }}
              >
                {t("static.nav.buttonB")}
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__button"
                id="Ser"
                onClick={(e) => {
                  scrollTo();
                }}
              >
                {t("static.nav.buttonC")}
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__button"
                id="Con"
                onClick={(e) => {
                  scrollTo();
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
