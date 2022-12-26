import React from "react";
import "./footer.css";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        RENATO ALMEIDA
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testminials">Testemunhais</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/renato-almeida-/">
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/RenatoAlmDev">
          <AiOutlineGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RENATO ALMEIDA. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
