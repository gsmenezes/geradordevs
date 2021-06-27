import React from "react";

import ServiceTextRotator from "../../Services/rotator";

import { Container, Phrase } from "./styles";

const content = [
  {
    text: "Gerador de Devs",
    className: "words",
    animation: "fade",
  },
  {
    text: "Back-end",
    className: "words",
    animation: "fade",
  },
  {
    text: "Java",
    className: "words",
    animation: "fade",
  },
  {
    text: "Spring Boot",
    className: "words",
    animation: "fade",
  },
  {
    text: "Front-end",
    className: "words",
    animation: "fade",
  },
  {
    text: "Angular 9",
    className: "words",
    animation: "fade",
  },
  {
    text: "JavaScript",
    className: "words",
    animation: "fade",
  },
  {
    text: "Vem ser Dev!",
    className: "words",
    animation: "fade",
  },
];

const TextRotator: React.FC = () => {
  return (
    <Container>
      <Phrase>
        <h1>
          <ServiceTextRotator
            content={content}
            time={2500}
            startDelay={250}
            transitionTime={400}
          />
        </h1>
      </Phrase>
    </Container>
  );
};

export default TextRotator;
