import styled from 'styled-components';

export const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
min-height: 35vh;

@media (max-width: 600px){
    min-height: 30vh;
  }
`;

export const Phrase = styled.div `
position: relative;
font-size: 26px;
color:  #284B63;
margin: 5% auto 0;
line-height: 28px;

.words{
    color:  #284B63;
}

@media (max-width: 600px){
    font-size: 20px;
    margin-top: 20%;
  }

  @media(max-width: 400px){
      line-height: 40px;
      width: 80%;
  }
`;