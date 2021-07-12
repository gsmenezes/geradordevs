import React from "react";

import logo from "../../assets/logo.svg";

import { Container, Logo, Menu } from "./styles";

const Header: React.FC = () => {
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");

  const handleOpen = () => {
    menuToggle?.classList.toggle("active");
    navigation?.classList.toggle("active");
  };
  return (
    <Container>
      <Logo>
        <a href="/" className="logo">
          <img
            src={logo}
            alt="Cabeça com códigos e letras G e D que referem-se a Gerador de Devs"
          />
        </a>
      </Logo>
      <Menu>
        <div className="toggle" onClick={handleOpen}></div>
        <ul className="navigation">
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/sobre-nos">Sobre</a>
          </li>
          <li>
            <a href="/curso">Curso</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
