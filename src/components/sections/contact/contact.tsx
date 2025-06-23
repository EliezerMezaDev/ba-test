import React, { useState, useRef } from "react";

//? translations
import { useTranslation } from "@hooks/useTranslation";

//? images & styles
import image from "@images/contact/contact-1.webp";

import "./contact.scss";

const EMAIL_TARGET = "info@buenaventura.tax";

const Contact = () => {
  const t = useTranslation();

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const validateForm = () => {
    if (
      !form.name ||
      !form.lastName ||
      !form.phone ||
      !form.email ||
      !form.message
    ) {
      return t("static.contact.error.default");
    }

    //? basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return t("static.contact.error.errorEmail");
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!e) return;

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!e) return;
    e.preventDefault();
    setSending(true);
    setError("");
    setSuccess("");

    // Validación previa
    const errorMsg = validateForm();
    if (errorMsg) {
      setError(errorMsg);
      setSending(false);
      return;
    }

    try {
      const formElement = formRef.current;

      if (!formElement) throw new Error("No form element");

      const formData = new FormData(formElement);
      const body = new URLSearchParams(formData as any).toString();

      const response = await fetch(formElement.action || "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (response.ok) {
        setSuccess(t("static.contact.success"));
        setError("");

        formElement.reset();

        setForm({
          name: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setError(t("static.contact.error.server", response.status.toString()));
      }
    } catch (err) {
      setError(t("static.contact.error.network"));
    } finally {
      setSending(false);
    }
  };

  function isMobileDevice() {
    if (typeof window === "undefined" || typeof navigator === "undefined")
      return false;

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  function getEmailLink() {
    const subject = encodeURIComponent(
      t("contact.content.emailSubjet", "Buenaventura.tax | CONTACT FROM FORM")
    );

    if (isMobileDevice()) {
      return `mailto:${EMAIL_TARGET}?subject=${subject}`;
    }

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TARGET}&su=${subject}`;
  }

  return (
    <>
      <section id="sec-contact" className="contact">
        <div className="container-main">
          <h2 className="title">{t("contact.content.info.title")}</h2>
          <p className="description">
            {t("contact.content.info.description")}
            {t("contact.content.link.part1")}
            <a
              href={getEmailLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{ whiteSpace: "nowrap" }}
            >
              {EMAIL_TARGET}
            </a>
            {t("contact.content.link.part2")}
            <a
              href="tel:+14705085455"
              target="_blank"
              style={{ whiteSpace: "nowrap" }}
            >
              +1 (470) 508‑5455
            </a>
          </p>

          <div className="wrapper">
            <img
              className="wrapper__image"
              src={image}
              title="contact_image"
              alt="contact_image"
            />

            <form
              className="form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              ref={formRef}
              onSubmit={handleSubmit}
              action="/"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <span>
                <input
                  type="text"
                  name="name"
                  placeholder={t("static.contact.form.namePlaceholder")}
                  className="form__input-text"
                  value={form.name}
                  onChange={handleChange}
                  disabled={sending}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("static.contact.form.lastNamePlaceholder")}
                  className="form__input-text"
                  value={form.lastName}
                  onChange={handleChange}
                  disabled={sending}
                />
              </span>
              <span>
                <input
                  type="text"
                  name="phone"
                  placeholder={t("static.contact.form.phonePlaceholder")}
                  className="form__input-text"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={sending}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("static.contact.form.emailPlaceholder")}
                  className="form__input-email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={sending}
                />
              </span>
              <textarea
                name="message"
                placeholder={t("static.contact.form.messagePlaceholder")}
                className="form__textarea"
                value={form.message}
                onChange={handleChange}
                disabled={sending}
              />
              {error && <div className="form__error">{error}</div>}
              {success && <div className="form__success">{success}</div>}

              <button
                className="button form__button"
                type="submit"
                disabled={sending}
              >
                <p className="button__text">
                  {sending
                    ? t("static.contact.sending")
                    : t("static.contact.button")}
                </p>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
