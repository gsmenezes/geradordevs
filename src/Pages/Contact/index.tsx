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

export default Contact;
