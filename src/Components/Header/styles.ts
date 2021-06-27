import styled from 'styled-components';

export const Container = styled.div`
top:0;
left:0;
background-color: #353535;
display: flex;
justify-content: space-around;
align-items: center;
vertical-align: middle;
padding: 2px 0;
width: 100vw;
height: 65px;
position: fixed;
z-index:2000;
`;

export const Logo = styled.div`
> img {
    width: 35px;
    height: 35px;
}
`;

export const Menu = styled.div`

.menu-wrap .toggler {
    position: absolute;
    top: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height:50px;
    opacity: 0;
};

.menu-wrap .hamburguer {
    position: absolute;
    top:0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
};

.menu-wrap .hamburguer >div {
    position: relative;
    width: 87%;
    height: 2px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
}

.menu-wrap .hamburguer >div:before,
    .menu-wrap .hamburguer >div:after {
        content: '';
position: absolute;
z-index: 1;
top: -10px;
left: 0;
width: 100%;
height: 2px;
background: inherit;
    }  

.menu-wrap .hamburguer >div:after {
        top: 10px;
    }

.menu-wrap .toggler:checked + .hamburguer >div {
    transform: rotate(135deg);
    
}

.menu-wrap .toggler:checked + .hamburguer >div:before,
.menu-wrap .toggler:checked + .hamburguer >div:after {
    top: 0;
    transform: rotate(90deg);
    
}

.menu-wrap .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-wrap .menu >div {
    background: #353535;
    border-radius: 50%;
    width: 200vw;
    height: 200vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.4s ease;
    z-index:1000;
    overflow:hidden;
}

.menu-wrap .menu >div >div {
    text-align: center;
    max-width: 90vh;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.menu-wrap .menu >div >div >ul >li {
    list-style: none;
    color: #FFF;
    font-size: 2rem;
    padding: 1.5rem;
    text-transform: uppercase;
    }

.menu-wrap .menu >div >div >ul >li >a {
        color: inherit;
        text-decoration: none;
        transition: color 0.4s ease;

       &:hover{
        color:#FFF200;
        font-weight: bold;
        transition: color 0.5s ease;
       } 
}

.menu-wrap .menu >div >div >ul >li >a:active {
        color:#FFF200;
    }


.menu-wrap .toggler:checked ~ .menu {
        visibility: visible;
    }

.menu-wrap .toggler:checked ~ .menu >div {
        transform: scale(1);
        transition-duration: 0.75s
    }

.menu-wrap .toggler:checked ~ .menu >div >div {
    opacity: 1;
    transition: opacity 0.8s ease;
}

`;
