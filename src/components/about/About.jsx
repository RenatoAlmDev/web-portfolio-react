import React from "react";
import "./about.css";
import MEABOUT from "../../assets/me-about.jpg";
import { BiCoffee } from "react-icons/bi";
import { TbFolders } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Um Pouco</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEABOUT} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiCoffee className="about__icon" />
              <h5>Experiência</h5>
              <h5>1 Ano</h5>
              <small>
                De estudos e projetos. Aguardando seu contato para ser a
                primeira experiência profissional
              </small>
            </article>

            <article className="about__card">
              <TbFolders className="about__icon" />
              <h5>Projetos</h5>
              <h5>5+</h5>
              <small>
                Mais de 5 projetos elaborados. Adicionando novos projetos com
                frequência
              </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            maxime exercitationem officia, excepturi optio, velit quasi quidem
            dolor quibusdam, et vero sit repudiandae dolores aperiam sunt
            provident voluptatum possimus at.
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos conversar?
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
