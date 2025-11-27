import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
${reset}
  body,button{
    font-family: ${props => props.theme.fonts.base};
  }
    a{
      text-decoration:none;
      }
`;

export default GlobalStyles;