import styled from 'styled-components';

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

export const List = styled.div `
margin: 20px auto;
width: 70%;
display: flex;
flex-direction: column;

p {
  padding: 5px 0;
  align-items: center;
  line-height: 24px;
}

span {
  font-size: 12px;
  padding: 10px 0;
}

strong{
  font-size: 18px;
}

ul {
  list-style: upper-roman;
  font-weight: 600;
  margin: 5px 46px;
}

button {
  width: 160px;
  height: 48px;
  border-radius: 10px;
  background-color:  #284B63;
  margin: 35px 0 0;
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

@media (max-width: 600px){
 width: 80% !important;

 button {
   margin: 20px 0 75px;
 }
}

@media (max-width: 900px){
  width: 60%;
 }

`;