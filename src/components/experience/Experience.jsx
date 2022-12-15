import React from "react";
import "./experience.css";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";
import { SiTypescript, SiMongodb, SiRuby, SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>Minha Experiência</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Dev</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>

            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Dev</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>

            <article className="experience__details">
              <SiRuby className="experience__details-icon" />
              <div>
                <h4>Ruby</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
