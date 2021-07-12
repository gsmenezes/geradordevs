import styled from 'styled-components';
import menu from '../../assets/hamburger.svg';
import close from '../../assets/close.png';

export const Container = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 75px;
padding: 40px 100px;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1000;
background-color: #353535;

@media (max-width: 991px){
    padding: 20px;
}
`;

export const Logo = styled.div`
position: relative;
display: inline-block;

img {
    width: 90px;
    height: 75px;
}
`;

export const Menu = styled.div`
ul{
    position: relative;
    display: flex;
}

li{
    list-style: none;
}

li a {
    display: inline-block;
    color: #FFF;
    font-weight: 600;
    font-size: 1.1em;
    margin-left: 10px;
    padding: 8px 18px;
    text-decoration: none;
    user-select: none;
}

li a .active,
li a:hover{
border-bottom: 2px solid #FFF;
} 

@media (max-width: 991px){
   ul {
       display: none;
   }

   ul.active{
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       background: #353535;
   }

   ul li {
       margin: 10px 0;
   }
   ul li a {
       margin-left: 0;
   }

   .toggle{
       position: fixed;
       top: 20px;
       right: 20px;
       width: 40px;
       height: 40px;
       background: url(${menu});
       background-size: 25px;
       background-repeat: no-repeat;
       background-position: center;
       cursor: pointer;
       z-index: 1000;
       filter: invert(1);
   }
   .toggle.active{
        background: url(${close});
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
   }
}
`;