import styled from 'styled-components'

export const Container = styled.div `
z-index: 1500;
margin-top: 120px;
position: relative;
`;

export const Title = styled.h2 `
display: flex;
justify-content: center;

@media (max-width: 600px){
  width: 65%;
}
`;

export const SocialContainer = styled.div `
display: flex;
flex-direction: column;

a{
  text-align: center;
  margin: 10% auto 5%;
  text-decoration: none;
  color: #353535;
  font-weight: bold;
}
`;

export const LittleCards = styled.div `
display: flex;
justify-content: center;

.card{
  background-color: #284B63;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  padding: 8px;
  margin: 15px 20px;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.8); 
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.8);
}

.whats{
  width: 24px;
  padding-left: 1px;
}
`;