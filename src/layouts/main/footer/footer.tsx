import React from "react";

//? translations
import { useTranslation } from "@hooks/useTranslation";

//? images & styles
import Novanet from "@images/logo-nn.svg";
import "./footer.scss";

//? others
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const t = useTranslation();

  return (
    <footer className="footer">
      <div className="container-main">
        <div className="footer__rsss">
          <div className="footer__item">
            <FaLinkedin className="footer__item__link" />
          </div>
          <div className="footer__item">
            <FaInstagram className="footer__item__link" />
          </div>
          <div className="footer__item">
            <FaXTwitter className="footer__item__link" />
          </div>
        </div>
        <p className="footer__copy">
          {t("static.footer.legal")} {new Date().getFullYear()}{" "}
          {t("static.footer.author")}
          <a href="https://novanet.studio" target="_blank" rel="noreferrer">
            <img
              className="footer__logo-novanet"
              src={Novanet}
              alt="logo-novanet"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
