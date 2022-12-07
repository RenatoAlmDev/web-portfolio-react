import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Olá, eu sou o</h5>
        <h1>Renato Almeida</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Role Pra Baixo
        </a>
      </div>
    </header>
  );
};

export default Header;
