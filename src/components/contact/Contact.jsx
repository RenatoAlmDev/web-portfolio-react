import React, { useRef } from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiDiscordLine, RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_o3oqh7k",
      "template_8acz7th",
      form.current,
      "g2Anh3bCg3gMhtwNn"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Entre em contato</h5>
      <h2>Comigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>almeida.renato1988@gmail.com</h5>
            <a href="mailto:almeida.renato1988@gmail.com" target="blank">
              Envie um email
            </a>
          </article>

          <article className="contact__option">
            <RiDiscordLine className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>Reinacho#1525</h5>
            <a href="https://google.com" target="blank">
              Mande uma mensagem
            </a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 37 99157-8615</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5537991578615"
              target="blank"
            >
              Mande uma mensagem
            </a>
          </article>
        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            required
          />

          <input type="email" name="email" placeholder="Seu Email" required />

          <textarea
            name="message"
            rows="7"
            placeholder="Escreva sua mensagem aqui"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
