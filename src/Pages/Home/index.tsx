import React from "react";

import Header from "../../Components/Header";
import TextRotator from "../../Components/TextRotator";

import codeman from "../../assets/codegif.gif";

import { Container, Block, Title, List } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <TextRotator />
      <Container>
        <Block>
          <Title>Sua nova escola de Programação Online</Title>
          <List>
            <p>
              Entenda do assunto com pessoas que já conhecem programação, viva
              novas experiências, teste o que aprendeu, compartilhe ideias e
              alimente a curiosidade.
            </p>
          </List>
          <button>
            <a
              href="https://geradordedevs.hubspotpagebuilder.com/inscricao"
              target="_blank"
            >
              Eu quero!
            </a>
          </button>
          <img src={codeman} alt="Gif de homem digitando código" />
        </Block>
      </Container>
    </>
  );
};
export default Home;
