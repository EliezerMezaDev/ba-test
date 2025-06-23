import * as React from "react";

//? gatsby
import { HeadFC } from "gatsby";

//? layouts
import Main from "@layouts/main";

//? translations
import { useTranslation } from "@hooks/useTranslation";

//? images & styles
import "../assets/scss/styles.scss";

const NotFoundPage: React.FC = () => {
  const t = useTranslation();

  return (
    <Main>
      <section id="sec-notfound" className="notfound">
        <h1 className="notfound__title">404</h1>
        <h2 className="notfound__subtitle">{t("static.404.title")}</h2>
        <p className="notfound__description">{t("static.404.description")}</p>
        <a href="/" className="button notfound__button">
          {t("static.404.button")}
        </a>
      </section>
    </Main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Page not found</title>;
