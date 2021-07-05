import React from "react";

import Header from "../../Components/Header";

import { Container, Title, SocialContainer } from "./styles";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Entre em contato conosco</h1>
        </Title>
        <SocialContainer>
          <a href="mailto:atendimento@geradordedevs.com.br">
            atendimento@geradordedevs.com.br
          </a>
        </SocialContainer>
      </Container>
    </>
  );
};

//https://api.whatsapp.com/send?phone=5511950473336&text=Oi!%20Gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Dev.

export default Contact;
