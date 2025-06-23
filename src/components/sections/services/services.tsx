import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";

//? translations
import { useTranslation } from "@hooks/useTranslation";
import { LanguageContext } from "@context/LanguageContext";

//? images & styles
import services1 from "@images/services/services-1.png";
import services2 from "@images/services/services-2.png";

import "./services.scss";

//? const
const assets = [
  {
    src: services1,
    title: "image service 1",
    alt: "image service 1",
  },
  {
    src: services2,
    title: "image service 2",
    alt: "image service 2",
  },
];

const ServiceDetail = ({
  source,
}: {
  source: {
    specialty: String;
    title: String;
    items: string;
  };
}) => {
  return (
    <div className="detail">
      <h4 className="detail__title">{source.title}</h4>
      <ReactMarkdown children={source.items} />
    </div>
  );
};

const Services = () => {
  const t = useTranslation();
  const { translations } = useContext(LanguageContext);

  const services = translations?.services?.content?.specialties ?? [];

  return (
    <>
      <section id="sec-services" className="services">
        <div className="container-main">
          <h2 className="title">{t("services.content.info.title")}</h2>
          <p className="description">
            {t("services.content.info.description")}
          </p>
          <ul className="list">
            {services.map((s, index) => (
              <li className="list__item" key={`services_${index}`}>
                <img
                  className="list__image"
                  src={assets[index].src}
                  title={assets[index].title}
                  alt={assets[index].alt}
                />

                <div className="list__info">
                  <h3 className="list__info__title">{s.name}</h3>
                  <div className="list__info__content">
                    {s.list.map((detail) => ServiceDetail({ source: detail }))}
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

export default Services;
