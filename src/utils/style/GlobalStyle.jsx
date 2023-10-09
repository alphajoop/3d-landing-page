import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Mont, sans-serif;
    font-style: normal;
    line-height: normal;
  }
`;

export default StyledGlobalStyle;
