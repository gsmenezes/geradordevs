import React from "react";
import Header from "../../Components/Header";

import { Container, Title, List } from "./styles";

const Courses: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Formação Dev</Title>
        <List>
          <p>
            Na Gerador de Devs, não temos o intuito de gerar
            <strong> certificados</strong>, mas sim, gerar
            <strong> bons profissionais</strong>.
          </p>
          <p>
            As aulas são gravadas, com um desafio ao final de cada aula. Os
            alunos que não atingirem a média, serão convidados à uma aula ao
            vivo com o professor, podendo sanar as dúvidas e então realizar um
            novo desafio.
          </p>
          <p>A grade divide-se em 5 módulos:</p>
          <ul>
            <li>Fundamentos da Programação - 18 horas</li>
            <li>Formação Back-end - 66 horas</li>
            <li>Formação Front-end - 60 horas</li>
            <li>Versionamento de Código - 12</li>
            <li>Projeto Final - 21 horas</li>
          </ul>
          <span>* Cada aluno fará pelo menos 4 módulos</span>
          <p>
            Cobramos apenas a dedicação e empenho dos alunos, mas o conteúdo é{" "}
            <strong> 100% gratuito!</strong>
          </p>

          <button>
            <a
              href="https://geradordedevs.hubspotpagebuilder.com/inscricao"
              target="_blank"
              rel="noreferrer"
            >
              Inscreva-se!
            </a>
          </button>
        </List>
      </Container>
    </>
  );
};

export default Courses;
