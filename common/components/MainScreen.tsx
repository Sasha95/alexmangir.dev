import React from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import s from "./styles/mainScreenPage.module.scss";

export const MainScreen = () => {
  return (
    <div className={s.mainScreen}>
      <Header />

      <h1>тело</h1>

      <Footer />
    </div>
  );
};
