import React from "react";

//? translations
import { useTranslation } from "@hooks/useTranslation";

//? images & styles
import image from "@images/contact/contact-1.png";

import "./contact.scss";

const Contact = () => {
  const t = useTranslation();

  return (
    <>
      <section id="sec-contact" className="contact">
        <div className="container-main">
          <h2 className="title">{t("contact.content.info.title")}</h2>
          <p className="description">{t("contact.content.info.description")}</p>

          <div className="wrapper">
            <img
              className="wrapper__image"
              src={image}
              title="contact_image"
              alt="contact_image"
            />

            <form className="form">
              <span>
                <input
                  type="text"
                  placeholder={t("static.contact.form.namePlaceholder")}
                  className="form__input-text"
                />
                <input
                  type="text"
                  placeholder={t("static.contact.form.lastNamePlaceholder")}
                  className="form__input-text"
                />
              </span>
              <span>
                <input
                  type="text"
                  placeholder={t("static.contact.form.phonePlaceholder")}
                  className="form__input-text"
                />
                <input
                  type="email"
                  placeholder={t("static.contact.form.emailPlaceholder")}
                  className="form__input-email"
                />
              </span>
              <textarea
                placeholder={t("static.contact.form.messagePlaceholder")}
                className="form__textarea"
              />
              <button className="button form__button">
                <p className="button__text">{t("static.contact.button")}</p>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
