import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  overflow: auto;

  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #284B63;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track{
    background-color: #1a1a1a;
  }
}

*, button, input {
  border: none;
  outline: 0;
  font-family: 'Source Code Pro', monospace;
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}
`;
