import React from "react";

import Header from "../../Components/Header";
import TextRotator from "../../Components/TextRotator";

import codeman from "../../assets/codegif.gif";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <TextRotator />
      <img src={codeman} alt="Gif de homem digitando código" />
    </>
  );
};
export default Home;
