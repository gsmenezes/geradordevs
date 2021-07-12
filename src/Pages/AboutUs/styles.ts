import styled from 'styled-components';

export const Container = styled.div `
z-index: 1500;
margin-top: 120px;
position: relative;

`;

export const Title = styled.h2 `
display: flex;
justify-content: center;`;

export const TextContainer = styled.div `
display: flex;
flex-direction: column;
margin: 5% auto;
width: 70%;
line-height: 25px;

p {
padding: 5px 0;
}

strong{
  font-size: 18px;
}
`;

export const Team = styled.div `
display: flex;
justify-content: space-between;
margin: 5% auto;
width: 70%;

@media(max-width: 900px){
  flex-direction: column;
  margin: 10% auto;
}
`;

export const SubTitle = styled.div `
color: #284B63;
font-size: 20px;
font-weight: 600;
padding-bottom: 5px;
text-decoration: overline;

@media(max-width: 900px){
  width: 300px;
  font-size: 18px;
}
`;

export const Block = styled.div `
padding: 5px 0;
line-height: 20px;
font-size: 15px;

.names{
  margin-bottom: 10%;
}

@media(max-width: 600px){
  p{
    font-size: 14px;
  }
}
`;