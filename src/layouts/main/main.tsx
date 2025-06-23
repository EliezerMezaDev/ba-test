import React from "react";

//? components
import Header from "./header";
import Footer from "./footer";

const Main = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="container-layout">{children}</main>
    <Footer />
  </>
);

export default Main;
