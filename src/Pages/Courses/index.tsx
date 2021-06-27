import React from "react";
import Header from "../../Components/Header";

import { Container, Title } from "./styles";

const Courses: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Title>
          <h1>Formações</h1>
        </Title>
      </Container>
    </>
  );
};

export default Courses;
