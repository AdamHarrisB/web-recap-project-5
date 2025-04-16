import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    align-items: center;
  }

  body {
    font-family: system-ui;
  }
  
`;
