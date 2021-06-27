import React from "react";

import logo from "../../assets/logo3.svg";

import { Container, Logo, Menu } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Silhueta de cabeça escrito GD Gerador de Devs" />
      </Logo>
      <Menu>
        <div className="menu-wrap">
          <input type="checkbox" name="" className="toggler" />
          <div className="hamburguer">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/sobre-nos">Sobre nós</a>
                  </li>
                  <li>
                    <a href="/formacoes">Formações</a>
                  </li>
                  <li>
                    <a href="/contato">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </Container>
  );
};

export default Header;
