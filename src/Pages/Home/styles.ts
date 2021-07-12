import styled from 'styled-components';

export const Container = styled.div `

`;

export const Block = styled.div `
display: flex;
flex-direction: column;
margin-left: 10%;

img {
  display: flex;
  margin: -33% 5% 0 auto;
  height: 80vh;
}

button {
  width: 160px;
  height: 48px;
  border-radius: 10px;
  background-color:  #284B63;
  margin: 50px 0;
  -webkit-box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.9); 
box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.9);
}

button:hover{
width: 165px;
height: 50px;
transition: .3s ease;
}


a {
  text-decoration: none;
  color: #FFF;
  font-size: 18px;
  vertical-align: super;
}

@media (max-width: 900px){
  button {
    margin: 25px 0 15px;
  }
}

@media(max-width: 1180px) {
  img {
    display: none;
  }
}
`;

export const Title = styled.h3 `
font-size: 24px;
color: #353535;

@media (max-width: 600px){
  font-size: 18px;
  width: 90%;
}
`;

export const List = styled.div `
margin: 20px 20px 20px 0;
width: 45%;

p {
  padding: 5px 0;
  display: flex;
  align-items: center;
  line-height: 24px;
}

@media (max-width: 600px){
 width: 90% !important;
}

@media (max-width: 900px){
  width: 60%;
 }

`;