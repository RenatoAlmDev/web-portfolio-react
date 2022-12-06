import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/renato-almeida-/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/RenatoAlmDev" target="blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
