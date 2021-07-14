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
  width: 70%;
  margin: 0 auto;
  text-align: center;
}
`;

export const SocialContainer = styled.div `
display: flex;
flex-direction: column;

.mail{
  text-align: center;
  margin: 5% auto 5%;
  text-decoration: none;
  color: #353535;
  font-weight: bold;
}

.mail:hover{
  font-size: 18px;
  color: #284B63;
}
`;

export const LittleCards = styled.div `
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    position: relative;
    display: inline-block;
    margin-right: 15px;
    width: 50px;
    height: 50px;
    background: #353535 ;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s ease-in-out;
  }

  .whats{
    width: 24px;
    padding-left: 1px;
  }

  .card a:hover{
    background: #284B63;
    transform: translateY(-10px);
  }
`;