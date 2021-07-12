import React from "react";

import Header from "../../Components/Header";

import {
  Container,
  Title,
  TextContainer,
  Team,
  Block,
  SubTitle,
} from "./styles";

const AboutUs: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Title>Sobre nós</Title>
        <TextContainer>
          <p>
            Fundado em 2020 com ênfase em{" "}
            <strong>ensinar e desenvolver talentos</strong> para o mercado de
            trabalho, o Gerador de Devs empenha-se à transformar a vida das
            pessoas que desejam entrar no mundo da Tecnologia.
          </p>
          <p>
            Os cursos são preparados para atender{" "}
            <strong>toda a diversidade de pessoas</strong>, inclusive as que{" "}
            <strong>não possuem experiência</strong>, pois as aulas vão do
            básico ao avançado, além de contar com plantões de dúvidas semanais.
          </p>
          <p>
            O aprendizado dos alunos é avaliado constantemente através de
            <strong> desafios</strong>, que são pontuados e acompanhados pelos
            professores, preparando-os então para darem seus primeiros passos na
            área.
          </p>
        </TextContainer>
        <Team>
          <Block>
            <div className="names">
              <SubTitle>Fundadores e Professores</SubTitle>
              <p>Renato Naumann</p>
              <p>Leonardo Dornelas</p>
            </div>
          </Block>
          <Block>
            <div className="names">
              <SubTitle>Coordenação</SubTitle>
              <p>Letícia Moreno</p>
            </div>
            <div className="names">
              <SubTitle>Criação</SubTitle>
              <p>Laryssa Moreno</p>
              <p>Beatriz Moreno</p>
              <p>Gabriela Silva</p>
            </div>
            <div className="names">
              <SubTitle>Captação de Talentos</SubTitle>
              <p>Jorge Campos</p>
            </div>
          </Block>
          <Block>
            <div className="names">
              <SubTitle>Professores</SubTitle>
              <p>Mohamed Emara</p>
              <p>Gabriela Cesaro</p>
              <p>Ivonir Neto</p>
            </div>
            <div className="names">
              <SubTitle>Atendimento ao aluno</SubTitle>
              <p>Nicoly Bizzi</p>
            </div>
          </Block>
        </Team>
      </Container>
    </>
  );
};

export default AboutUs;
