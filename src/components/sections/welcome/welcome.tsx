import React from "react";

//? translations
import { useTranslation } from "@hooks/useTranslation";

//? images & styles
import "./welcome.scss";

const Welcome = () => {
  const t = useTranslation();
  return (
    <>
      <section id="sec-welcome" className="welcome">
        <div className="container-main">
          <h1 className="title">{t("welcome.content.info.title")}</h1>
          <p className="description">{t("welcome.content.info.description")}</p>
          <button className="button">
            <p className="button__text">{t("welcome.content.ctaTitle")}</p>
          </button>
        </div>
      </section>
    </>
  );
};

export default Welcome;
