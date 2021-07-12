import React from "react";

import Header from "../../Components/Header";

import {
  Container,
  Title,
  TextContainer,
  Team,
  Block,
  SubTitle,
  Block2,
  Block3,
} from "./styles";

const AboutUs: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Title>Sobre nós</Title>
        <TextContainer>
          <p>
            Fundado em 2020 com ênfase em ensinar e desenvolver talentos para o
            mercado de trabalho, o Gerador de Devs empenha-se à transformar a
            vida das pessoas que desejam entrar no mundo da Tecnologia.
          </p>
          <p>
            Os cursos são preparados para atender toda a diversidade de pessoas,
            inclusive as que não possuem experiência, pois as aulas vão do
            básico ao avançado, além de contar com plantões de dúvidas semanais.
          </p>
          <p>
            O aprendizado dos alunos é avaliado constantemente através de
            desafios, que são pontuados e acompanhados pelos professores,
            preparando-os então para darem seus primeiros passos na área.
          </p>
        </TextContainer>
        <Team>
          <Block>
            <SubTitle>Fundadores e Professores</SubTitle>
            <div>
              <p>Renato Naumann</p>
              <p>Leonardo Dornelas</p>
            </div>
          </Block>
          <Block2>
            <SubTitle>Coordenação</SubTitle>
            <p>Letícia Moreno</p>
            <SubTitle>Criação</SubTitle>
            <div>
              <p>Laryssa Moreno</p>
              <p>Beatriz Moreno</p>
              <p>Gabriela Silva</p>
            </div>
            <SubTitle>Captação de Talentos</SubTitle>
            <p>Jorge Campos</p>
          </Block2>
          <Block3>
            <SubTitle>Professores</SubTitle>
            <p>Mohamed Emara</p>
            <p>Gabriela Cesaro</p>
            <p>Ivonir Neto</p>
            <SubTitle>Atendimento ao aluno</SubTitle>
            <p>Nicoly Bizzi</p>
          </Block3>
        </Team>
      </Container>
    </>
  );
};

export default AboutUs;
