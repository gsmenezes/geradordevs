import styled from 'styled-components';

export const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
`;

export const Phrase = styled.div `
position: relative;
font-size: 26px;
color: #353535;
width: 50%;
margin: 0 auto;
line-height: 28px;

.words{
    color: #353535;
    margin-left: 10px;
}
`;