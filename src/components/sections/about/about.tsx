import React from "react";

//? translations
import { useTranslation } from "@hooks/useTranslation";

//? images & styles
import icon1 from "@images/icons/icon-1.svg";
import icon2 from "@images/icons/icon-2.svg";
import icon3 from "@images/icons/icon-3.svg";
import icon4 from "@images/icons/icon-4.svg";
import icon5 from "@images/icons/icon-5.svg";

import "./about.scss";

const About = () => {
  const t = useTranslation();

  const items = [
    {
      icon: icon1,
      title: t("aboutUs.content.attributesList.0.label"),
      description: t("aboutUs.content.attributesList.0.desc"),
    },
    {
      icon: icon2,
      title: t("aboutUs.content.attributesList.1.label"),
      description: t("aboutUs.content.attributesList.1.desc"),
    },
    {
      icon: icon3,
      title: t("aboutUs.content.attributesList.2.label"),
      description: t("aboutUs.content.attributesList.2.desc"),
    },
    {
      icon: icon4,
      title: t("aboutUs.content.attributesList.3.label"),
      description: t("aboutUs.content.attributesList.3.desc"),
    },

    {
      icon: icon5,
      title: t("aboutUs.content.attributesList.4.label"),
      description: t("aboutUs.content.attributesList.4.desc"),
    },
  ];

  return (
    <>
      <section id="sec-about" className="about">
        <div className="container-main">
          <h2 className="title">{t("aboutUs.content.info.title")}</h2>
          <p className="description">{t("aboutUs.content.info.description")}</p>
          <div className="guia">
            <p className="description">{t("aboutUs.content.info.subtitle")}</p>
            <ul className="guia__list">
              {items.map((i, index) => (
                <li className="guia__item" key={index}>
                  <span className="guia__item__icon">
                    <img
                      src={i.icon}
                      alt={`icon_${index}`}
                      title={`icon_${index}`}
                    />
                  </span>
                  <h4 className="guia__item__subtitle">{i.title}</h4>
                  <p className="guia__item__desc">{i.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
