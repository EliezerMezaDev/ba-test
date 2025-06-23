import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";

//? translations
import { useTranslation } from "@hooks/useTranslation";
import { LanguageContext } from "@context/LanguageContext";

//? images & styles
import additionals1 from "@images/icons/icon-6.svg";
import additionals2 from "@images/icons/icon-7.svg";
import additionals3 from "@images/icons/icon-8.svg";

import "./additionals.scss";

//? const
const assets = [
  {
    src: additionals1,
    title: "image additional 1",
    alt: "image additional 1",
  },
  {
    src: additionals2,
    title: "image additional 2",
    alt: "image additional 2",
  },
  {
    src: additionals3,
    title: "image additional 3",
    alt: "image additional 3",
  },
];

const Additionals = () => {
  const t = useTranslation();
  const { translations } = useContext(LanguageContext);

  console.log(translations);

  const additionals = translations?.additionals?.content?.list ?? [];

  return (
    <>
      <section id="sec-additionals" className="additionals">
        <div className="container-main">
          <h2 className="title">{t("additionals.content.info.title")}</h2>
          <p className="description">
            {t("additionals.content.info.description")}
          </p>
          <ul className="list">
            {additionals.map((a, index) => (
              <li className="list__item" key={`additionals_${index}`}>
                <div className="list__info">
                  <img
                    className="list__image"
                    src={assets[index].src}
                    title={assets[index].title}
                    alt={assets[index].alt}
                  />

                  <h3 className="list__info__title">{a.name}</h3>

                  <div className="list__info__content">
                    <ReactMarkdown children={a.items} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Additionals;
