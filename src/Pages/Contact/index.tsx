import React from "react";

import Header from "../../Components/Header";

import Whatsapp from "../../assets/whatsapp.svg";
import Linkedin from "../../assets/LinkedIn.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

import { Container, Title, SocialContainer, LittleCards } from "./styles";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Entre em contato conosco</Title>
        <SocialContainer>
          <a className="mail" href="mailto:atendimento@geradordedevs.com.br">
            atendimento@geradordedevs.com.br
          </a>
          <LittleCards>
            <div className="card">
              <a
                href="https://www.linkedin.com/company/gerador-de-devs/about/"
                target="_blank"
              >
                <img
                  src={Linkedin}
                  alt="Logo do LinkedIn com link para página da Gerador de Devs"
                />
              </a>
            </div>
            <div className="card">
              <a
                href="https://www.instagram.com/gerador.devs/?hl=pt-br"
                target="_blank"
              >
                <img
                  src={Instagram}
                  alt="Logo do Instagram com link para página da Gerador de Devs"
                />
              </a>
            </div>
            <div className="card">
              <a
                href="https://www.facebook.com/gerador.dedevs.1"
                target="_blank"
              >
                <img
                  src={Facebook}
                  alt="Logo do Facebook com link para página da Gerador de Devs"
                />
              </a>
            </div>
            <div className="card">
              <a
                href="https://api.whatsapp.com/send?phone=5511950473336&text=Oi!%20Gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Dev."
                target="_blank"
              >
                <img
                  className="whats"
                  src={Whatsapp}
                  alt="Logo do whatsapp com link para número da Gerador de Devs"
                />
              </a>
            </div>
          </LittleCards>
        </SocialContainer>
      </Container>
    </>
  );
};

//

export default Contact;
